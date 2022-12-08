import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSession } from 'next-auth/react'

export default function MediaPage() {

    const [mediaInfo, setMediaInfo] = useState();
    const { data: session, status } = useSession()
    const [katalogueId, setkatalogueId] = useState()
    const router = useRouter()
    const { mId, type } = router.query

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
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/${katalogueId}`, {
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
        } else {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movieKatalogueRoute/${katalogueId}`, {
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
                {mediaInfo && <div>
                    <h1>
                        {mediaInfo.title} {mediaInfo.name}
                    </h1>
                    {mediaInfo.poster_path ? (
                        <img
                            src={`https:image.tmdb.org/t/p/w200${mediaInfo.poster_path}`}
                            alt={`${mediaInfo.title} Poster`}
                        />
                    ) : (
                        <div className="filler-poster"></div>
                    )}
                    <h3>
                        {mediaInfo.overview}
                    </h3>
                    <h4>
                        Runtime: {mediaInfo.runtime} minutes
                    </h4>
                    <h4>
                        Released: {mediaInfo.release_date}{mediaInfo.first_air_date}
                    </h4>
                    <h4 className="media-format">
                        Format: <span>{type}</span>
                    </h4>
                    <h4>
                        Genres: {mediaInfo.genres.map((item, index) => (
                            <div key={"genre-" + index}>
                                {item.name}
                            </div>))}
                    </h4>
                    <h4>
                        Production Companies: {mediaInfo.production_companies.map((item, index) => (
                            <div key={"productionCompany-" + index}>
                                {item.name}
                            </div>))}
                    </h4>
                </div>}
            </div>
            <div>
                {session && (
                    <Box sx={{ minWidth: 170 }}>
                        <FormControl fullWidth>
                            <InputLabel>Add to Katalogue</InputLabel>
                            <Select>
                                {katalogueStatuses.map((status, index) => (
                                    <React.Fragment key={"mID_MenuItem" + index}>
                                        <MenuItem value={status} onClick={() => handlePickStatus(mId, status)}>{status}</MenuItem>
                                    </React.Fragment>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                )}
            </div>
        </div>
    )
}
