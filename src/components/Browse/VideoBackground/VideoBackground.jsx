import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerId } from "../../../utils/Redux/movieSlice";

import { AUTH_OPTIONS } from "../../../utils/CONSTANTS/constants";

import { useGetTrailerVideo } from "../../../customHooks/useGetTrailerVideo";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const { trailerId } = useSelector((store) => store.movies);

  useGetTrailerVideo(id);

  return (
    <div>
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?si=n-8I4swcaU2yIbvN?&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
