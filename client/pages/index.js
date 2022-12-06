import React, { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CarouselItem from '../ClientComponents/CarouselItem';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import { Card, CardActionArea, Table, TableCell } from '@mui/material';
import Link from 'next/link';
import DisplayCards from '../ClientComponents/DisplayCards';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';



const theme = createTheme();

// 
//          This page is meant to serve as the "/" 
//          or Landing Page for the website
//
//

export default function Album() {

    const [trending, setTrending] = useState([]);
    const [mediaType, setMediaType] = useState("movie");
    const { data: session, status } = useSession();
    const router = useRouter();



    useEffect(() => {
        if (status == 'authenticated') {
            router.push('/home');
        }

        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=468018e64d6cfa119009ede09787dea0&`
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

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"

                >
                    <Box item
                        direction="column"
                        align="center"
                        sx={{
                            bgcolor: '#1876D1',
                            pt: 8,
                            pb: 6,
                            marginTop: "25px",
                            borderRadius: 7,
                            boxShadow: "1px 6px 8px 3px rgba(160,159,159,0.75)",
                            padding: "70px 100px",
                            maxWidth: 1000,
                        }}
                    >



                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="white"
                            gutterBottom
                            fontWeight={"bold"}
                        >
                            Welcome to BingeWatcher!
                        </Typography>
                        <Typography variant="h5" align="center" color="white" paragraph>
                            Created by Group D to help users keep track of their consumed media. A tracker for those
                            who like to keep it all in one place. Whether it is movies, tv shows, or anime, there is something for everyone.
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center" rowSpacing={5} columns={10}
                            color="white">
                            <Grid item xs={4}>
                                <Item>
                                    <TvIcon sx={{ mr: 2 }}></TvIcon>
                                    Search for movies all of genres and languages from all over the world. Who knows, maybe you can find the one you&apos;ve been looking for or find a hidden gem.
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <MovieIcon sx={{ mr: 2 }}></MovieIcon>
                                    Looking for a new show to watch? We&apos;ve got them all here, from science fiction to history and everything in between.
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <ChatBubbleIcon sx={{ mr: 2 }}></ChatBubbleIcon>
                                    Use our forum system to chat with other users in this simple and easy to use approach to forum. No upvotes or downvotes, just simple and clean chatting.
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <SearchIcon sx={{ mr: 2 }}></SearchIcon>
                                    Search for anything and everything using our implementation of leading third-party solutions and our own first-party recommendation system to find your next favorite thing.
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <DisplayCards title="Trending Movies" medias={trending} />
                </Grid>
            </main>
        </ThemeProvider>
    );
}