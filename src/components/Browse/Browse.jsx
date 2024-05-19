import React,{useEffect} from 'react';
import Header from '../Header/Header';

import { useNowPlayingMovies } from '../../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer/MainContainer';


const Browse = () => {

  // Custom hook to fetch movie lists
  useNowPlayingMovies();
  

  return (
    <div>
        <Header/>
        <MainContainer/>
    </div>
  )
}

export default Browse;