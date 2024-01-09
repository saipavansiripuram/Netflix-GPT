import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-60 pl-2 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Up Coming"}
            movies={movies.upComingMovies}
            useBackdrop={true}
          />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList
            title={"Popular"}
            movies={movies.nowPlayingMovies}
            useBackdrop={true}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
