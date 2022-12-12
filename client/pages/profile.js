import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import EnhancedTable from '../ClientComponents/SortingTable';
import MediaCarousel from '../ClientComponents/MediaCarousel';
import MovieRecommendations from '../MovieRecommendations.json'

function TabPanel({ children, value, index, ...other }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>
            {children}
          </div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {

  const [value, setValue] = React.useState(0);
  const { data: session, status } = useSession()
  const router = useRouter()

  const [trendingSeries, setTrendingSeries] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [recommendedMovieTitle, setRecommendedMovieTitle] = useState("");

  const [katalogueId, setkatalogueId] = useState()
  const [movieKatalogue, setMovieKatalogue] = useState()
  const [tvKatalogue, setTVKatalogue] = useState()
  const [movieRecommendations, setMovieRecommendations] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchTrendingSeriesData = async () => {
    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=468018e64d6cfa119009ede09787dea0&`)
      .then((res) => res.json())
      .then((info) => {
        if (!info.errors) {
          setTrendingSeries(firstFourTrending(info.results));
        } else {
          setTrendingSeries([]);
        }
      });
  }

  const fetchTrendingMoviesData = async () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=468018e64d6cfa119009ede09787dea0&`)
      .then((res) => res.json())
      .then((info) => {
        if (!info.errors) {
          setTrendingMovies(firstFourTrending(info.results));
        } else {
          setTrendingMovies([]);
        }
      });
  }

  const fetchMovieData = async () => {
    //verify if the katalogue exists and has media in it
    if (movieKatalogue && movieKatalogue.length > 0) {
      const movieEntries = await Promise.all(movieKatalogue.map(async (movie) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.MovieID}?api_key=468018e64d6cfa119009ede09787dea0&`)
        const data = await response.json()
        data.media_status = movie.MKUStatus;
        if (data.genres && data.genres.length > 0) {
          data.first_genre = data.genres[0].name;
        }
        else {
          data.first_genre = ''
        }
        return data;
      }))
      setMovies(movieEntries);
    }
  }

  const fetchSeriesData = async () => {
    //verify if the katalogue exists and has media in it
    if (tvKatalogue && tvKatalogue.length > 0) {
      const seriesEntry = await Promise.all(tvKatalogue.map(async (tv) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tv.TVID}?api_key=468018e64d6cfa119009ede09787dea0&`)
        const data = await response.json()
        data.media_status = tv.TVKUStatus;
        if (data.genres && data.genres.length > 0) {
          data.first_genre = data.genres[0].name;
        }
        else {
          data.first_genre = ''
        }
        data.episode = tv.TVKUEpisode;
        data.season = tv.TVKUSeason;
        return data;
      }))
      setSeries(seriesEntry);
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



  async function getMovieRecommendationTitles(movieID) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${movieID}/clst/slct`, {
        headers: {
          'Content-type': 'application/json',
        }
      })
      const data = await response.json()
      if(data.cluster){
        setMovieRecommendations(data.cluster)
      }
      else{
        setMovieRecommendations([])
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function pickRandomMovieToRecommend() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${katalogueId}/Watched/krp`, {
        headers: {
          'Content-type': 'application/json',
        }
      })
      const data = await response.json()
      console.log('data')
      console.log(data)
      getMovieRecommendationTitles(data.moviekatalogues.MovieID)
    } catch (e) {
      console.log(e)
    }
  }

  const fetchRecommendedMovies = async () => {
    console.log('Movie Recs')
    console.log(movieRecommendations)
    let dummyMovies = [];
    if (movieRecommendations && movieRecommendations.length > 0) {
      movieRecommendations.map(async (movie, index) => {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=468018e64d6cfa119009ede09787dea0&language=en-US&page=1&include_adult=false&query=${movie.Moviename}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (!data.errors) {
              if (data.results && data.results.length > 0) {
                //first element returned is the movie we're basing our recommendation on
                if (index == 0) {
                  setRecommendedMovieTitle("Because you watched ".concat(movie.Moviename));
                }
                else {
                  dummyMovies[index - 1] = data.results[0];
                }
              }
            }
          });
        setRecommendedMovies(dummyMovies)
      });
    }
  }


  async function getMovieKatalogue() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/movieKatalogueRoute/${katalogueId}`, {
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await response.json()
      setMovieKatalogue(data.moviekatalogues)
    } catch (e) {
      console.log(e)
    }
  }

  async function getTVKatalogue() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TVKatalogueRoute/${katalogueId}`, {
        headers: {
          'Content-type': 'application/json'
        }
      })
      const data = await response.json()
      setTVKatalogue(data.tvkatalogues)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (status != 'authenticated' && status != 'loading') {
      router.push("/auth/signin")
    }
    if (status == 'authenticated') {
      getKatalogueID().catch(console.error)
    }
  }, [status])

  useEffect(() => {
    if (katalogueId) {
      getMovieKatalogue().catch(console.error)
      getTVKatalogue().catch(console.error)
      pickRandomMovieToRecommend().catch(console.error)
    }
  }, [katalogueId])

  useEffect(() => {
    if (movieKatalogue) {
      fetchMovieData().catch(console.error);
    }
  }, [movieKatalogue])

  useEffect(() => {
    if (tvKatalogue) {
      fetchSeriesData().catch(console.error);
    }
  }, [tvKatalogue])

  useEffect(() => {
    fetchTrendingSeriesData().catch(console.error);
    fetchTrendingMoviesData().catch(console.error);
    fetchRecommendedMovies().catch(console.error)
  }, [])

  useEffect(() => {
    fetchRecommendedMovies().catch(console.error)
    setRecommendedMovies(movieRecommendations)

  }, [movieRecommendations.length])

  useEffect(() => {
    setMovies(movies)
  }, [movies.length])


  const firstFourTrending = (media) => {
    const trendingMedia = [];
    let index = 0;
    for (index; index < 4; index++) {
      trendingMedia[index] = media[index];
    }
    return trendingMedia;
  }

  return (
    <div>
      {session && (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ ml: 100 }}>
              <Tab label="Movies" sx={{ color: "white" }} {...a11yProps(0)} />
              <Tab label="Series" sx={{ color: "white" }}{...a11yProps(1)} />
            </Tabs>
          </Box>
          {/* Movie tab */}
          <TabPanel value={value} index={0}>
            <Katalogue isMovie={true} medias={movies} setMedias={setMovies} />
            <MediaCarousel shouldCom media={trendingMovies} title="Trending Movies" isMovie={true} />
            <MediaCarousel media={recommendedMovies} title={recommendedMovieTitle} isMovie={true} />
          </TabPanel>
          {/* Series Tab */}
          <TabPanel value={value} index={1}>
            <Katalogue isMovie={false} medias={series} setMedias={setSeries} />
            <MediaCarousel media={trendingSeries} title="Trending Series" isMovie={false} />
          </TabPanel>
        </Box>
      )}
    </div>
  );
}



function Katalogue({ medias, isMovie, setMedias }) {
  return (
    <div>
      <Container>
        <Typography variant="h4" >
          Katalogue
        </Typography>
        <EnhancedTable medias={medias} isMovie={isMovie} setMedias={setMedias} />
      </Container>
    </div>
  )
}

export default BasicTabs;