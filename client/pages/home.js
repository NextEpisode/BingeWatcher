import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../ClientComponents/CarouselItem';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Card, CardActionArea, CardMedia, Grid, Table, TableCell, Typography } from '@mui/material';
import Link from 'next/link';
import DisplayCards from '../ClientComponents/DisplayCards';
import MediaCarousel from '../ClientComponents/MediaCarousel'



export default function Album() {

    const theme = createTheme();
    const { data: session, status } = useSession()
    const router = useRouter()

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [carouselData, setCarouselData] = useState([]);


    useEffect(() => {

        fetchCarouselData().catch(console.error)

        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=468018e64d6cfa119009ede09787dea0&`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setTrendingMovies(firstFiveTrending(data.results));
                } else {
                    setTrendingMovies([]);
                }
            }).catch(console.error);
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=468018e64d6cfa119009ede09787dea0&`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setTrendingSeries(firstFiveTrending(data.results));
                } else {
                    setTrendingSeries([]);
                }
            }).catch(console.error);
    }, [])

    const fetchCarouselData = async () => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=468018e64d6cfa119009ede09787dea0&`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setCarouselData(firstTwentyTrending(data.results));
                } else {
                    setCarouselData([]);
                }
            });
    }


    const firstFiveTrending = (media) => {
        const trendingMedia = [];
        let index = 0;
        for (index; index < 5; index++) {
            trendingMedia[index] = media[index];
        }
        return trendingMedia;
    }

    const firstTwentyTrending = (media) => {
        const trendingMedia = [];
        let index = 0;
        for (index; index < 20; index++) {
            trendingMedia[index] = media[index];
        }
        return trendingMedia;
    }



    useEffect(() => {
        if (status != 'authenticated' && status != 'loading') {
            router.push("/auth/signin")
        }
        if (status == 'authenticated') {
            console.log(session.user.id)
            handleLogin()
        }
    }, [status])


    async function handleLogin() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/userRoute/opt`, {
                body: JSON.stringify({
                    GoogleID: session.user.id,
                    UName: session.user.name
                }),
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {session && (
                    <main>
                        {/* Hero unit */}
                        <MediaCarousel media={carouselData} title="Trending Movies" isMovie={true}/>
                        <DisplayCards title="Trending Movies of the week" medias={trendingMovies} />
                        <DisplayCards title="Trending Series of the week" medias={trendingSeries} />
                    </main>
                )}
            </ThemeProvider>
        </div>
    );
}