import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/Redux/movieSlice";

import {AUTH_OPTIONS} from "../utils/CONSTANTS/constants"

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      AUTH_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};