import React,{useEffect} from 'react';
import Header from '../Header/Header';

import { useNowPlayingMovies } from '../../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer/MainContainer';
import SecondaryContainer from './SecondaryContainer/SecondaryContainer';


const Browse = () => {

  // Custom hook to fetch movie lists
  useNowPlayingMovies();
  

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse;