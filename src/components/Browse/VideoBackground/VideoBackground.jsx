import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetTrailerVideo } from "../../../customHooks/useGetTrailerVideo";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const { trailerId } = useSelector((store) => store.movies);

  useGetTrailerVideo(id);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?si=n-8I4swcaU2yIbvN?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
