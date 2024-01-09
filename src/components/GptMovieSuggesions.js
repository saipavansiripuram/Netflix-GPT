import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggesions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80 rounded-2xl">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList

            key={movieName}
            title={movieName}
            movies={movieResults[index]}
            // useBackdrop={true}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggesions;
