import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerId } from "../../../utils/Redux/movieSlice";

import { AUTH_OPTIONS } from "../../../utils/CONSTANTS/constants";

const VideoBackground = ({id}) => {
  
  const dispatch = useDispatch();
  const {trailerId} = useSelector((store)=>store.movies);

  const getMovieVideos = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",AUTH_OPTIONS);
    const json = await data.json();
    // console.log(json.results);

    const filteredTrailer = json.results.filter((video)=>{
      return video.type === "Trailer";
    });

    // console.log(filteredTrailer)
    const Trailer = filteredTrailer.length?filteredTrailer[0]?.key:json.results[0]?.key;
    dispatch(addTrailerId(Trailer));
  }

  useEffect(()=>{
    getMovieVideos();
  },[]);


  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerId}?si=n-8I4swcaU2yIbvN`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;