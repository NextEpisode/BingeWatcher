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
import movieKatalogues from '../movieKatalogues.json'
import tvkat from '../tvkat.json'
// import MovieRecommendations from '../MovieRecommendations.json'

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


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [trendingSeries, setTrendingSeries] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [recommendedMovieTitle, setRecommendedMovieTitle]  = useState("");


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
    let dummyMovies = [];
    //verify if the katalogue exists and has media in it
    if (movieKatalogues && movieKatalogues.length > 0) {
      movieKatalogues[0].moviekatalogues.map(async (movie) => {
        await fetch(`https://api.themoviedb.org/3/movie/${movie.MovieID}?api_key=468018e64d6cfa119009ede09787dea0&`)
          .then((res) => res.json())
          .then((data) => {
            if (!data.errors) {
              data.media_status = movie.MKUStatus;
              if (data.genres && data.genres.length > 0) {
                data.first_genre = data.genres[0].name;
              }
              else {
                data.first_genre = ''
              }
              dummyMovies.push(data);
              setMovies(dummyMovies);
            }
          });
        setMovies(dummyMovies);
      })
    }
  }

  const fetchSeriesData = async () => {
    let dummySeries = [];
    //verify if the katalogue exists and has media in it
    if (tvkat && tvkat.tvkatalogues.length > 0) {
      tvkat.tvkatalogues.map(async (tv) => {
        await fetch(`https://api.themoviedb.org/3/tv/${tv.TVID}?api_key=468018e64d6cfa119009ede09787dea0&`)
          .then((res) => res.json())
          .then((data) => {
            if (!data.errors) {
              data.media_status = tv.TVKUStatus;
              if (data.genres && data.genres.length > 0) {
                data.first_genre = data.genres[0].name;
              }
              else {
                data.first_genre = ''
              }
              data.episode = tv.TVKUEpisode;
              data.season = tv.TVKUSeason;
              dummySeries.push(data);
              setSeries(dummySeries);
            }
          });
      })
      setSeries(dummySeries);
    }
  }

  const fetchRecommendedMovies = async () => {
    let dummyMovies = [];
    if (MovieRecommendations && MovieRecommendations.recommendedMovies.length > 0) {
      MovieRecommendations.recommendedMovies.map(async (movie, index) => {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=468018e64d6cfa119009ede09787dea0&language=en-US&page=1&include_adult=false&query=${movie}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (!data.errors) {
              if (data.results && data.results.length > 0) {
                //first element returned is the movie we're basing our recommendation on
                if (index == 0) {
                  setRecommendedMovieTitle("Because you watched ".concat(movie));
                }
                else {
                  dummyMovies[index-1] = data.results[0];
                }
              }
            }
          });
      })
      setRecommendedMovies(dummyMovies);
    }
  }

  useEffect(() => {
    if (status != 'authenticated' && status != 'loading') {
      router.push("/auth/signin")
    }
    console.log(status)
  }, [status])



  useEffect(() => {
    fetchTrendingSeriesData().catch(console.error);
    fetchTrendingMoviesData().catch(console.error);
    fetchRecommendedMovies().catch(console.error)
    fetchMovieData().catch(console.error);
    fetchSeriesData().catch(console.error);

  }, [])

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
              <Tab label="Movies" {...a11yProps(0)} />
              <Tab label="Series" {...a11yProps(1)} />
            </Tabs>
          </Box>
          {/* Movie tab */}
          <TabPanel value={value} index={0}>
            <Katalogue isMovie={true} medias={movies} />
            <MediaCarousel shouldCom media={trendingMovies} title="Trending Movies" isMovie={true} />
            <MediaCarousel media={recommendedMovies} title={recommendedMovieTitle} isMovie={true} />
          </TabPanel>
          {/* Series Tab */}
          <TabPanel value={value} index={1}>
            <Katalogue isMovie={false} medias={series} />
            <MediaCarousel media={trendingSeries} title="Trending Series" isMovie={false} />
          </TabPanel>
        </Box>
      )}
    </div>
  );
}



function Katalogue({ medias, isMovie }) {
  return (
    <div>
      <Container>
        <Typography variant="h4" >
          Katalogue
        </Typography>
        <EnhancedTable medias={medias} isMovie={isMovie} />
      </Container>
    </div>
  )
}

export default BasicTabs;