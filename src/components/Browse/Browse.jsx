import React,{useEffect} from 'react';
import Header from '../Header/Header';

import { useNowPlayingMovies } from '../../customHooks/useNowPlayingMovies';
import { usePopularMovies } from '../../customHooks/usePopularMovies';
import { useTopRatedMovies } from '../../customHooks/useTopRatedMovies';
import { useUpcomingMovies } from '../../customHooks/useUpcomingMovies';
import MainContainer from './MainContainer/MainContainer';
import SecondaryContainer from './SecondaryContainer/SecondaryContainer';


const Browse = () => {

  // Custom hook to fetch movie lists
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse;