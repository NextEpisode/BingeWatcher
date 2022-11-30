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



export default function Album() {

    const theme = createTheme();
    const { data: session, status } = useSession()
    const router = useRouter()

    const [trending, setTrending] = useState([]);
    const [mediaType, setMediaType] = useState("movie");


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=468018e64d6cfa119009ede09787dea0&`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setTrending(firstThreeTrending(data.results));
                } else {
                    setTrending([]);
                }
            });
    }, [])


    const firstThreeTrending = (media) => {
        const trendingMedia = [];
        let index = 0;
        for (index; index < 5; index++) {
            trendingMedia[index] = media[index];
        }
        console.log(trendingMedia[0]);
        return trendingMedia;
    }



    useEffect(() => {
        if (status != 'authenticated' && status != 'loading') {
            router.push("/auth/signin")
        }
        console.log(status)
    }, [status])



    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {session && (
                    <main>
                        {/* Hero unit */}
                        <Container sx={{ py: 8 }} maxWidth="md">
                            <Typography variant='h3'>
                                Recommendation Carousel
                            </Typography>
                            {/* End hero unit */}
                            <Carousel animation='slide'
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                {trending.map(media => (
                                    <CarouselItem key={media.id} media={media} />
                                ))
                                }
                            </Carousel>
                        </Container>
                        <DisplayCards title="Trending Movies" medias={trending} />
                    </main>
                )}
            </ThemeProvider>
        </div>
    );
}