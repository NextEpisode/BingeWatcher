import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CarouselItem from '../ClientComponents/CarouselItem';
import Carousel from 'react-material-ui-carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import EnhancedTable from '../ClientComponents/SortingTable';
import movieKatalogues from '../movieKatalogues.json'

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
  const [movieKatalogue, setMovieKatalogue] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [movieStatuses, setMoviesStatuses] = useState([]);


  const fetchTrendingSeriesData = async () => {
    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=468018e64d6cfa119009ede09787dea0&`)
      .then((res) => res.json())
      .then((info) => {
        if (!info.errors) {
          setTrendingSeries(firstThreeTrending(info.results));
        } else {
          setTrendingSeries([]);
        }
      });
    console.log(trendingSeries)
  }

  const fetchSeriesData = async () => {
    // This is where you will get the series data for the katalogues using
    // setSeries(data)
  }

  const fetchMovieData = async () => {
    let dummyMovies = [];
    let statuses = [];
    movieKatalogues[0].moviekatalogues.map(async (movie) => {
      await fetch(`https://api.themoviedb.org/3/movie/${movie.MovieID}?api_key=468018e64d6cfa119009ede09787dea0&`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            dummyMovies.push(data);
            setMovies(dummyMovies);
            statuses.push(movie.MKUStatus);
            setMoviesStatuses(statuses);
          }
        });
    })
  }

  useEffect(() => {
    if (status != 'authenticated' && status != 'loading') {
      router.push("/auth/signin")
    }
    console.log(status)
  }, [status])


  useEffect(() => {
    fetchTrendingSeriesData().catch(console.error);
    fetchMovieData().catch(console.error);
  }, [])

  const firstThreeTrending = (media) => {
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

          <TabPanel value={value} index={0}>
            <Katalogue isMovie={true} medias={movies} mediaStatuses={movieStatuses} />
            <Container sx={{ py: 8 }} maxWidth="md">
              <Carousel stopAutoPlayOnHover={true} style={{ align: 'center' }}>
                {(trendingSeries && trendingSeries.length > 0) ? trendingSeries.map((media) =>
                  (<CarouselItem key={media.id} media={media} />)) : ""}
              </Carousel>
            </Container>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Katalogue isMovie={true} medias={[]} />

            {/* The trendingSeries should be the recommendation's data. This is just here
                for you to understand later how to add that part here and how its done */}
            <div className='carousel'>
              <Carousel stopAutoPlayOnHover={true} style={{ align: 'center' }}>
                {(trendingSeries && trendingSeries.length > 0) ? trendingSeries.map((media) =>
                  (<CarouselItem key={media.id} media={media} />)) : ""}
              </Carousel>
            </div>

          </TabPanel>
        </Box>
      )}
    </div>
  );
}

function Katalogue({ medias, isMovie, mediaStatuses }) {
  return (
    <div>
      <Container>
        <Typography variant="h4" >
          Katalogue
        </Typography>
        <EnhancedTable medias={medias} isMovie={true} mediaStatuses={mediaStatuses} />
        {/* <BasicTable medias={medias} isMovie={isMovie} /> */}
      </Container>
    </div>
  )
}

export default BasicTabs;