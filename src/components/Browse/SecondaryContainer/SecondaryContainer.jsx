import React from 'react'
import MovieList from './MovieList/MovieList';

import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

  return (
    <div>
      <MovieList title={"Now Playing"}/>
    </div>
  )
}

export default SecondaryContainer