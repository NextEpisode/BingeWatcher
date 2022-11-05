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