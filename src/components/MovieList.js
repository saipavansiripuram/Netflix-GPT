import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, useBackdrop }) => {
  // console.log(movies);
  return (
    <div className="p-4">
      <h1 className="text:lg md:text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              backdrop_path={movie.backdrop_path}
              original_title={movie.original_title}
              useBackdrop={useBackdrop}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
