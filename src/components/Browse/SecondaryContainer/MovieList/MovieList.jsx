import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-xl md:text-3xl md:py-6 text-white">Movies similar to - {title.toUpperCase()}</h1>
      <br />
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies?.map(
            (movie) =>
              movie?.poster_path && (
                <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
