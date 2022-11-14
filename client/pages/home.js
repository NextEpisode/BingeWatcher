import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../ClientComponents/CarouselItem';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'



export default function Album() {

    const theme = createTheme();
    const { data: session, status } = useSession()
    const router = useRouter()

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
                        <Container sx={{ py: 8 }} >
                            {/* End hero unit */}
                            <Carousel>
                                <CarouselItem media={{
                                    title: 'Shrek',
                                    poster_path: 'https://www.themoviedb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg',
                                    name: 'Shrek name',
                                    release_date: '2001'
                                }} />
                                <CarouselItem media={{
                                    title: 'Robinhood',
                                    poster_path: 'https://movieposters2.com/images/1595344-b.jpg',
                                    name: 'Robinhood name',
                                    release_date: '2099'
                                }} />
                                <CarouselItem media={{
                                    title: 'Dune',
                                    poster_path: 'https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960',
                                    name: 'Dune name',
                                    release_date: '2022',
                                }} />
                            </Carousel>
                        </Container>
                    </main>
                )}
            </ThemeProvider>
        </div>
    );
}