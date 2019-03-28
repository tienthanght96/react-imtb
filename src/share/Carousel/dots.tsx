import * as React from 'react'
import { generateArrayListNumbers } from '../../utils/array';

interface CarouselDotsProps {
  currentDot: number;
  totalDots: number;
  onClickDot?: (dot: number) => {};
};

export const CarouselDots:React.FunctionComponent<CarouselDotsProps> = ({ currentDot, totalDots, onClickDot }) => {

  if(!totalDots) return null;

  return (
    <ul className="carousel__dots">
     {  generateArrayListNumbers(totalDots).map(dot => (
          <li
            key={dot}
            className={`dots-item ${dot === currentDot ? 'dot-item--active' : ''}`}
            onClick={() => typeof onClickDot === 'function' && onClickDot(dot)}
          />
        ))
     }
    </ul>
  )
}