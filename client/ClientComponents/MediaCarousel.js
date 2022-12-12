import CarouselItem from './CarouselItem';
import Carousel from 'react-material-ui-carousel';
import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DisplayCards from '../ClientComponents/DisplayCards';


export default function TrendingCarousel({ media, title, isMovie }) {

  const [medias, setMedias] = useState([]);

  useEffect(() => {
    if(media && media.length > 0){
      let rows = media.reduce(function (rows, key, index) {
        return (index % 5 == 0 ? rows.push([key])
          : rows[rows.length - 1]?.push(key)) && rows;
      }, []);
      setMedias(rows)
    }
  }, [media.length])

  return (

    <div className='carousel'>
      <Container sx={{ py: 8 }} maxWidth="xl">

        <Carousel stopAutoPlayOnHover={true} style={{ align: 'center' }}>
          {(medias && medias.length > 0) ? medias.map((media, index) =>
          (
            <React.Fragment key={"Carousel-" + index}>
              <DisplayCards title={title} medias={media} isMovie={isMovie} />
            </React.Fragment>
          )
          ) : ""}
        </Carousel>
      </Container>
    </div>
  )
}