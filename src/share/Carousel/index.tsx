import * as React from 'react';
import { Movie } from '../../interfaces/Movie';
import { ContentCarousel } from './content';
import { BASE_IMAGE_URL } from '../../config/moviesAPIConfig';
import { CarouselDots } from './dots';

interface CarouselProps {
  movie: Movie;
  currentDot: number;
};

export const CarouselContainer: React.FunctionComponent<CarouselProps> = ({ movie } : CarouselProps) => {
    const { poster_path, title, vote_average } = movie;
    return (
      <div>
        <img src={`${BASE_IMAGE_URL}${poster_path}`}/>
        <ContentCarousel
          title={title}
          vote_average={vote_average}
          geners={[]}
        />
        <CarouselDots currentDot={1} totalDots={5}/>
      </div>
    );
}