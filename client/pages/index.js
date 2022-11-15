import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';



const theme = createTheme();

// 
//          This page is meant to serve as the "/" 
//          or Landing Page for the website
//
//

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: '#1876D1',
                        pt: 8,
                        pb: 6,
                        marginLeft: "35px",
                        marginRight: "35px",
                        marginTop: "25px",
                        borderRadius: 7,
                        boxShadow: "1px 6px 8px 3px rgba(160,159,159,0.75)",
                        padding: "70px 100px"
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
                                Search for movies all of genres and languages from all over the world. Who knows, maybe you can find the one you've been looking for or find a hidden gem.
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <MovieIcon sx={{ mr: 2 }}></MovieIcon>
                                Looking for a new show to watch? We've got them all here, from science fiction to history and everything in between.
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
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Carousel
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            sx={{ maxHeight: 700, maxWidth: 700 }}

                            image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114745-APZN90WhNMAD.jpg"
                            alt="random"
                        />
                        <CardMedia
                            component="img"
                            sx={{ maxHeight: 700, maxWidth: 700 }}

                            image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg"
                            alt="random"
                        />
                        <CardMedia
                            component="img"
                            sx={{ maxHeight: 700, maxWidth: 700, borderRadius: 2 }}

                            image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130592-LAUlhx15mxQu.jpg"
                            alt="random"
                        />
                    </Carousel>
                </Container>
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