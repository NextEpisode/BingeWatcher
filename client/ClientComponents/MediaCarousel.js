import CarouselItem from './CarouselItem';
import Carousel from 'react-material-ui-carousel';
import { Container } from '@mui/material';
import React from 'react';

export default function TrendingCarousel({trendingMedia,title,isMovie}) {
    return (
      <div className='carousel'>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Carousel stopAutoPlayOnHover={true} style={{ align: 'center' }}>
          {(trendingMedia && trendingMedia.length > 0) ? trendingMedia.map((media,index) =>
          (
            <React.Fragment key={title + "Carousel-" + index}>
              <CarouselItem media={media} isMovie={isMovie} />
            </React.Fragment>
          )
          ) : ""}
        </Carousel>
      </Container>
    </div>
    )
  }