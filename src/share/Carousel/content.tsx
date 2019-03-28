import * as React from 'react';
import { Button } from 'antd';
import { Icon } from 'antd';
import { Gener } from '../../interfaces/Gener';

interface ContentCarouselProps {
  title: string;
  geners?: Gener[];
  vote_average: number;
};

export const ContentCarousel: React.FunctionComponent<ContentCarouselProps> = ({ title, geners = [], vote_average }) => {
  return (
    <div className="carousel__content">
      <h3 className="title">{title}</h3>
      <div className="geners-list">
        { geners.map(gener => (
            <span key={`gener-${gener.id}`} className="geners-list__item">{gener.name}</span>
          ))
        }
      </div>
      <div className="bottom">
        <div className="vote">
        <Icon type="search" />
          <span className="vote__number">{vote_average}</span>
        </div>
        <div className="watch-now">
          <Button type="primary">Primary</Button>
        </div>
      </div>
    </div>
  )
}