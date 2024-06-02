import React from "react";
import { useSelector } from "react-redux";

// Local imports
import MovieList from "../../Browse/SecondaryContainer/MovieList/MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gptSlice);

  return (
    movieNames && (
      <div className="p-4 m-4 bg-black bg-opacity-40">
        <div>
          {movieNames?.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default GptMovieSuggestions;
