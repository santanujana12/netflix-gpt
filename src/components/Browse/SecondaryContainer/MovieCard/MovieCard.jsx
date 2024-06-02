import React from 'react';
import { IMG_CDN_URL } from '../../../../utils/CONSTANTS/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48'>
        <img src={IMG_CDN_URL+posterPath} alt="Movie Image"/>
    </div>
  )
}

export default MovieCard;