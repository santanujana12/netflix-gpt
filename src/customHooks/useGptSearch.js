import OpenAI from "openai";
import toast from "react-hot-toast";
import { AUTH_OPTIONS } from "../utils/CONSTANTS/constants";
import { useDispatch } from "react-redux";
import { addGptMovieNames } from "../utils/Redux/gptSlice";

const useGptSearch = () => {
  const dispatch = useDispatch();

  // Open AI configuration
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
  });

  // Returns a promise that contains an array of movie names returned by TMDB API
  const handleTmdbMovieData = async (movieNames) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieNames +
        "&include_adult=false&language=en-US&page=1",
      AUTH_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // GPT Search
  const handleGptSearch = async (searchMovieText) => {
    const gptQuery =
      "Suppose you are a Movie Recommendation system and suggest some movies for the query : " +
      searchMovieText +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults) {
      toast.error("Something went wrong");
    }

    const movieNames = gptResults.choices?.[0]?.message?.content.split(",");

    const promisedArray = await Promise.all(
      movieNames.map((movie) => {
        return handleTmdbMovieData(movie);
      })
    );

    dispatch(
      addGptMovieNames({ movieNames: movieNames, movieResults: promisedArray })
    );
  };

  return handleGptSearch;
};

export default useGptSearch;
