import React,{useEffect} from 'react';
import Header from '../Header/Header';

import { useNowPlayingMovies } from '../../customHooks/useNowPlayingMovies';


const Browse = () => {

  // Custom hook to fetch movie lists
  useNowPlayingMovies();
  

  return (
    <div>
        <Header/>
    </div>
  )
}

export default Browse;