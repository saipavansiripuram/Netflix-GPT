import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({
  posterPath,
  backdrop_path,
  original_title,
  useBackdrop,
}) => {
  if(!posterPath || !backdrop_path) return null;

  return (
    <div className="w-44 md:w-60 pr-4">
      {/*  <div className="w-80 pr-4">
       <img className="rounded-3xl"src={IMG_CDN_URL + posterPath} alt="Movie Card" />
       </div> */}
      {useBackdrop ? (
        <>
          <img
            className="rounded-xl md:rounded-xl"
            src={IMG_CDN_URL + backdrop_path}
            alt="Movie Backdrop"
          />
          <p className="text-xs md:text-l text-white text-center m-2">{original_title}</p>
        </>
      ) : (
        <img
          className="rounded-2xl"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Poster"
        />
      )}
    </div>
  );
};

export default MovieCard;
