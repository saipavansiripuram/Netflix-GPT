import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({
  posterPath,
  backdrop_path,
  original_title,
  useBackdrop,
}) => {
  return (
    <div className="w-80 pr-4">
      {/*  <div className="w-80 pr-4">
       <img className="rounded-3xl"src={IMG_CDN_URL + posterPath} alt="Movie Card" />
       </div> */}
      {useBackdrop ? (
        <>
          <img
            className="rounded-3xl"
            src={IMG_CDN_URL + backdrop_path}
            alt="Movie Backdrop"
          />
          <p className="text-white text-center m-2">{original_title}</p>
        </>
      ) : (
        <img
          className="rounded-3xl"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Poster"
        />
      )}
    </div>
  );
};

export default MovieCard;
