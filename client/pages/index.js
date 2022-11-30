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



const theme = createTheme();

export default function Album() {

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
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in porta sem, id maximus libero. Donec hendrerit lobortis turpis, et iaculis nibh imperdiet luctus.
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <MovieIcon sx={{ mr: 2 }}></MovieIcon>

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in porta sem, id maximus libero. Donec hendrerit lobortis turpis, et iaculis nibh imperdiet luctus.
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <ChatBubbleIcon sx={{ mr: 2 }}></ChatBubbleIcon>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in porta sem, id maximus libero. Donec hendrerit lobortis turpis, et iaculis nibh imperdiet luctus.
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <SearchIcon sx={{ mr: 2 }}></SearchIcon>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in porta sem, id maximus libero. Donec hendrerit lobortis turpis, et iaculis nibh imperdiet luctus.

                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <DisplayCards title="Trending Movies" medias={trending} />


            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}