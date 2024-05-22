import React from "react";
import MovieList from "./MovieList/MovieList";

import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  // const nowPlayingMovies = useSelector(
  //   (store) => store.movies?.nowPlayingMovies
  // );

  // const popularMovies = useSelector((store) => store.movies?.popularMovies);
  // const topRatedMovies = useSelector((store)=>)
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        {movies?.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        )}
        {movies?.popularMovies && (
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
        )}
        {movies?.topRatedMovies && (
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        )}
        {movies?.upcomingMovies && (
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
