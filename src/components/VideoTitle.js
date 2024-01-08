import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[23%] px-24 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white hover:opacity-70 text-black p-4 px-12 mx-2 rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-500  hover:opacity-50 text-black p-4 px-12 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
