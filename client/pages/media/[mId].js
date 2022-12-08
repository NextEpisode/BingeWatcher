import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@mui/system';
import { Card, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableCell, TableRow, Typography } from '@mui/material';
import { useSession } from 'next-auth/react'

export default function MediaPage() {

    const [mediaInfo, setMediaInfo] = useState();
    const { data: session, status } = useSession()
    const [katalogueId, setkatalogueId] = useState()
    const router = useRouter()
    const { mId, type } = router.query
    const [mediaStatus, setMediaStatus] = useState("");

    const katalogueStatuses = [
        "Plan to watch",
        "Watching",
        "Watched",
        "Dropped",
        "On Hold"
    ];

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

    async function handlePickStatus(id, pickedStatus) {
        if (type == "tv") {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/opt`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    TVID: mId,
                    TVKUStatus: pickedStatus,
                    TVKUSeason: 1,
                    TVKUEpisode: 1
                }),
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            setMediaStatus(pickedStatus);

        } else {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movieKatalogueRoute/opt`, {
                body: JSON.stringify({
                    KID: katalogueId,
                    MovieID: mId,
                    MKUStatus: pickedStatus
                }),
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            setMediaStatus(pickedStatus);
        }
    }


    useEffect(() => {
        if (status == 'authenticated') {
            getKatalogueID()
        }
        if (katalogueId) {
            console.log(katalogueId)
        }
    }, [status, katalogueId])

    useEffect(() => {
        fetchMediaInfo()
    }, [mId, type])

    return (
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
                                                    <InputLabel id="demo-simple-select-label">Add to Katalogue</InputLabel>
                                                    <Select sx={{ minWidth: 175, bgcolor: 'error.contrastText' }}
                                                        labelId="demo-simple-select-label"
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
    )
}
