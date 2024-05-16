import React,{useEffect} from 'react';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../../utils/Redux/movieSlice";

import { AUTH_OPTIONS } from '../../utils/CONSTANTS/constants';

const Browse = () => {

  const dispatch = useDispatch();

  const getNowPlayingMovies = async()=>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      AUTH_OPTIONS
    );
    const json = await data.json();
    
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])

  return (
    <div>
        <Header/>
    </div>
  )
}

export default Browse;