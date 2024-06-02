import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerId } from "../utils/Redux/movieSlice";

import { AUTH_OPTIONS } from "../utils/CONSTANTS/constants";

export const useGetTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      AUTH_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    const filteredTrailer = json.results.filter((video) => {
      return video.type === "Trailer";
    });

    // console.log(filteredTrailer)
    const Trailer = filteredTrailer.length
      ? filteredTrailer[0]?.key
      : json.results[0]?.key;
    dispatch(addTrailerId(Trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
