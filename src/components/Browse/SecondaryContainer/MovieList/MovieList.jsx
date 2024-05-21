import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <div>
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieList;
