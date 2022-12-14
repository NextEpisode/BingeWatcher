import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import DisplayCards from '../ClientComponents/DisplayCards';
import MediaCarousel from '../ClientComponents/MediaCarousel'



export default function Album() {

    const theme = createTheme();
    const { data: session, status } = useSession()
    const router = useRouter()

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [recommendedMovieTitles, setRecommendedMovieTitles] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [dailyTrendingSeries, setDailyTrendingSeries] = useState([])
    const [dailyTrendingMovies, setDailyTrendingMovies] = useState([])




    useEffect(() => {

        fetchRecommendedMovieTitles().catch(console.error)

        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=468018e64d6cfa119009ede09787dea0&`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setTrendingMovies(firstTwentyTrending(data.results));
                } else {
                    setTrendingMovies([]);
                }
            }).catch(console.error);
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=468018e64d6cfa119009ede09787dea0&`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setTrendingSeries(firstTwentyTrending(data.results));
                } else {
                    setTrendingSeries([]);
                }
            }).catch(console.error);
        fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=468018e64d6cfa119009ede09787dea0&`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setDailyTrendingSeries(firstTwentyTrending(data.results));
                } else {
                    setDailyTrendingSeries([]);
                }
            }).catch(console.error);
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=468018e64d6cfa119009ede09787dea0&`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setDailyTrendingMovies(firstTwentyTrending(data.results));
                } else {
                    setDailyTrendingMovies([]);
                }
            }).catch(console.error);
        fetchRecommendedMovies().catch(console.error)
    }, [])

    useEffect(() => {
        fetchRecommendedMovies().catch(console.error)
        console.log(recommendedMovies.length)
    }, [recommendedMovieTitles.length])

    const fetchRecommendedMovies = async () => {
        let dummyMovies = [];
        if (recommendedMovieTitles && recommendedMovieTitles.length > 0) {
            recommendedMovieTitles.map(async (movie, index) => {
                let str = ''
                let str2 = ''
                //Manipulating string into a searchable format
                if (movie.Moviename && movie.Moviename.length > 0) {
                    str = movie.Moviename.split('(')[0]
                    if (str.indexOf(',') > 0 && str.split(',')[1].length <= str.split(',')[0].length) {
                        str2 = str.split(',')[1]
                        str = str.split(',')[0]
                        str = str2 + " " + str
                    }
                }
                console.log(str)
                await fetch(`https://api.themoviedb.org/3/search/movie?api_key=468018e64d6cfa119009ede09787dea0&language=en-US&page=1&include_adult=false&query=${str}`
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (!data.errors) {
                            if (data.results && data.results.length > 0) {
                                dummyMovies[index] = data.results[0];
                            }
                            else {
                                dummyMovies[index] = ''
                            }
                        }
                    });
            });
            setRecommendedMovies(dummyMovies)
        }
    }

    const fetchRecommendedMovieTitles = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tu15BntHj9/clst/rnd`, {
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json()
            setRecommendedMovieTitles(firstTenTrending(data.cluster));
        } catch (e) {
            setRecommendedMovieTitles([]);
            console.log(e)
        }
    }

    const firstTwentyTrending = (media) => {
        const trendingMedia = [];
        let index = 0;
        for (index; index < 20; index++) {
            trendingMedia[index] = media[index];
        }
        return trendingMedia;
    }

    const firstTenTrending = (media) => {
        const trendingMedia = [];
        let index = 0;
        for (index; index < 10; index++) {
            trendingMedia[index] = media[index];
        }
        return trendingMedia;
    }

    useEffect(() => {
        if (status != 'authenticated' && status != 'loading') {
            router.push("/auth/signin")
        }
        if (status == 'authenticated') {
            handleLogin()
        }
    }, [status])


    async function handleLogin() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/userRoute/${session.user.id}/`, {
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
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {session && (
                    <main>
                        {/* Hero unit */}
                        <MediaCarousel title="Trending Movies of the week" media={trendingMovies} isMovie={true} />
                        <MediaCarousel title="Trending Series of the week" media={trendingSeries} isMovie={false} />
                        <MediaCarousel title="Trending Series of the day" media={dailyTrendingSeries} isMovie={false} />
                        <MediaCarousel title="Trending Movies of the day" media={dailyTrendingMovies} isMovie={true} />
                        <MediaCarousel shouldCom media={recommendedMovies} title="Must Watch" isMovie={true} />
                    </main>
                )}
            </ThemeProvider>
        </React.Fragment>
    );
}