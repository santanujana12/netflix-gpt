import React from 'react';
import { IMG_CDN_URL } from '../../../../utils/CONSTANTS/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img src={IMG_CDN_URL+posterPath} alt=""/>
    </div>
  )
}

export default MovieCard;