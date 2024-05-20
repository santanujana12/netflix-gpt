import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h3 className="py-6 text-lg w-1/3">{overview}</h3>
      <div className="flex gap-4">
        <button className="bg-white text-black border-solid border-2 border-black p-4 px-12 rounded-lg text-xl bg-opacity-30">
          ▶️ Play
        </button>
        <button className="bg-gray-500 p-4 px-12 rounded-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
