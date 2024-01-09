import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-8 md:px-24 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-xs md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block  py-6 text-l w-1/4">{overview}</p>
      <div className="my-2 md:m-0">
        <button className="bg-white hover:opacity-70 text-black py-1 md:p-4 px-2 md:px-12 mx-2 my-4 md:my-0 rounded-lg">
          ▶ Play
        </button>
        <button className=" bg-gray-500  hover:opacity-50 text-black py-1 md:p-4 px-2 md:px-12 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
