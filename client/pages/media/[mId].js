import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Paper, Table, TableCell, TableRow, Typography } from '@mui/material';
import { useSession } from 'next-auth/react'
import MediaCarousel from '../../ClientComponents/MediaCarousel'
import Select from '@mui/material/Select';

export default function MediaPage() {

    const [mediaInfo, setMediaInfo] = useState();
    const { data: session, status } = useSession()
    const [katalogueId, setkatalogueId] = useState()
    const router = useRouter()
    const { mId, type } = router.query
    const [mediaStatus, setMediaStatus] = useState("");
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [movieRecommendations, setMovieRecommendations] = useState([])
    const [recommendedMovieTitle, setRecommendedMovieTitle] = useState("")


    const katalogueStatuses = [
        "Plan to watch",
        "Watching",
        "Watched",
        "Dropped",
        "On Hold"
    ];

    const fetchRecommendedMovies = async () => {
        let dummyMovies = [];
        if (movieRecommendations && movieRecommendations.length > 0) {
            movieRecommendations.map(async (movie, index) => {
                await fetch(`https://api.themoviedb.org/3/search/movie?api_key=468018e64d6cfa119009ede09787dea0&language=en-US&page=1&include_adult=false&query=${movie.Moviename}`
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (!data.errors) {
                            if (data.results && data.results.length > 0) {
                                //first element returned is the movie we're basing our recommendation on
                                if (index == 0) {
                                    setRecommendedMovieTitle("More like ".concat(movie.Moviename));
                                }
                                else {
                                    dummyMovies[index - 1] = data.results[0];
                                }
                            }
                        }
                    });
                setRecommendedMovies(dummyMovies)
            });
        }
    }

    const fetchMediaInfo = async () => {
        if (mId && type) {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${mId}?api_key=468018e64d6cfa119009ede09787dea0&language=en-US`)
            const data = await response.json();
            setMediaInfo(data);
        }
    }

    async function getKatalogueID() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/userRoute/${session.user.id}/`, {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json()
            setkatalogueId(data.User.KID)
        } catch (e) {
            console.log(e)
        }
    }

    async function getStatus() {
        if (type == "tv") {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/${katalogueId}`, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                const data = await response.json()
                if (data.tvkatalogues) {
                    const foundEntry = data.tvkatalogues.find(element => (element.TVID == mId))
                    setMediaStatus(foundEntry.TVKUStatus)
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movieKatalogueRoute/${katalogueId}`, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                const data = await response.json()
                // setMediaStatus(data.User.mId)
                if (data.moviekatalogues) {
                    const foundEntry = data.moviekatalogues.find(element => (element.MovieID == mId))
                    setMediaStatus(foundEntry.MKUStatus)
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    async function getMovieRecommendationTitles() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${mId}/clst/slct`, {
                headers: {
                    'Content-type': 'application/json',
                }
            })
            const data = await response.json()
            if (data.cluster) {
                setMovieRecommendations(data.cluster)
            }
            else {
                setMovieRecommendations([])
            }
        } catch (e) {
            console.log(e)
        }
    }

    async function handlePickStatus(id, pickedStatus) {
        if (type == "tv") {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/${katalogueId}`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    TVID: mId,
                    TVKUStatus: pickedStatus,
                    TVKUSeason: 1,
                    TVKUEpisode: 1
                }),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            setMediaStatus(pickedStatus)

        } else {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movieKatalogueRoute/${katalogueId}`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    MovieID: mId,
                    MKUStatus: pickedStatus
                }),
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            setMediaStatus(pickedStatus)
        }
    }


    useEffect(() => {
        if (status == 'authenticated') {
            getKatalogueID()
        }
    }, [status])

    useEffect(() => {
        fetchMediaInfo()
        if (mId && type == "movie") {
            getMovieRecommendationTitles().catch(console.error)
        }
    }, [mId, type])

    useEffect(() => {
        if (katalogueId) {
            getStatus()
        }
    }, [katalogueId])

    useEffect(() => {
        fetchRecommendedMovies().catch(console.error)
        setRecommendedMovies([])
    }, [movieRecommendations.length])

    return (
        <div>
            <div className="media-page">
                <div className='media-memory'>
                    {mediaInfo &&
                        <Paper sx={{ mt: 5, bgcolor: 'text.disabled' }}>
                            <Table>
                                <TableRow>
                                    <td>
                                        {mediaInfo.poster_path ? (
                                            <img
                                                src={`https:image.tmdb.org/t/p/w200${mediaInfo.poster_path}`}
                                                alt={`${mediaInfo.title} Poster`}
                                            />
                                        ) : (
                                            <div className="filler-poster"></div>
                                        )}
                                    </td>
                                    <td>
                                        <Typography variant='h3' sx={{ ml: 5, color: 'error.contrastText' }} gutterBottom>
                                            {mediaInfo.title} {mediaInfo.name} ({type == "movie" ? mediaInfo.release_date.slice(0, 4) : mediaInfo.first_air_date.slice(0, 4)})
                                        </Typography>
                                        <td>
                                            <Typography variant='h6' sx={{ ml: 5, color: 'white' }}>
                                                {mediaStatus}
                                            </Typography>
                                        </td>
                                        <Typography sx={{ ml: 4 }} gutterBottom>
                                            {mediaInfo.genres.map((item, index) => (
                                                <td key={"genre-" + index}>
                                                    <Typography sx={{ ml: 1, color: 'error.contrastText' }} gutterBottom>
                                                        {item.name}
                                                    </Typography>
                                                </td>))}
                                            <td>
                                                <Typography sx={{ ml: 1, color: 'error.contrastText' }} gutterBottom>
                                                    /  {type == "movie" ? mediaInfo.runtime : (mediaInfo.episode_run_time && mediaInfo.episode_run_time.length > 0 ? mediaInfo.episode_run_time[0] : "")} minutes
                                                </Typography>
                                            </td>
                                        </Typography>
                                        <td>
                                            <Typography sx={{ ml: 5, color: 'error.contrastText' }} >
                                                {mediaInfo.overview}
                                            </Typography>
                                        </td>
                                        <div>
                                            {session && (
                                                <Box sx={{ ml: 5, minWidth: 170 }}>
                                                    <FormControl >
                                                        <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>Add to Katalogue</InputLabel>
                                                        <Select sx={{ minWidth: 175, bgcolor: 'error.contrastText' }}
                                                            labelId="demo-simple-select-label"
                                                            value={mediaStatus}
                                                            id="demo-simple-select">
                                                            {katalogueStatuses.map((status, index) => (
                                                                <React.Fragment key={"mID_MenuItem" + index}>
                                                                    <MenuItem value={status} selected={status == mediaStatus} onClick={() => handlePickStatus(mId, status)}>{status}</MenuItem>
                                                                </React.Fragment>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            )}
                                        </div>
                                    </td>

                                </TableRow>
                            </Table>

                        </Paper>
                    }
                </div>
            </div>
            <MediaCarousel media={recommendedMovies} title={recommendedMovieTitle} isMovie={true} />
        </div>
    )
}
