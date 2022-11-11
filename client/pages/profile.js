import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CarouselItem from '../ClientComponents/CarouselItem';
import Carousel from 'react-material-ui-carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import BasicTable from '../ClientComponents/Table';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


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

  useEffect(() => {
    if (status != 'authenticated' && status != 'loading') {
      router.push("/auth/signin")
    }
  }, [status])

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
            <Katalogue isMovie={true} medias={[{
              title: 'Shrek',
              poster_path: 'https://www.themoviedb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg',
              name: 'Shrek name',
              release_date: '2001'
            }, {
              title: 'Dune',
              poster_path: 'https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960',
              name: 'Dune name',
              release_date: '2022',
            }, {
              title: 'Robinhood',
              poster_path: 'https://movieposters2.com/images/1595344-b.jpg',
              name: 'Robinhood name',
              release_date: '2099'
            }]} />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Katalogue isMovie={false} medias={[{
              title: 'House of Dragons',
              poster_path: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
              name: 'House of dragons name',
              release_date: '2022',
              episode: '0'
            }, {
              title: 'Lord of the Rings - Rings of Power',
              poster_path: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg',
              name: 'Rings of Power',
              release_date: '2099',
              episode: '0'
            }, {
              title: 'Chainsaw Man',
              poster_path: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/npdB6eFzizki0WaZ1OvKcJrWe97.jpg',
              name: 'Chainsaw name',
              release_date: '2022',
              episode: '0'
            }]} />
          </TabPanel>
        </Box>
      )}
    </div>
  );
}



function Katalogue({ medias, isMovie }) {
  return (
    <div>
      <Carousel >
        {medias.map((media) => (
          <CarouselItem media={media} />
        ))}
      </Carousel>
      <Container>
        <Typography variant="h4" >
          Katalogue
        </Typography>
        <BasicTable medias={medias} isMovie={isMovie} />
      </Container>
    </div>

  )
}

export default BasicTabs;