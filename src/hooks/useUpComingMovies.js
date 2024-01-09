import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import { API_OPTIONS } from "../utils/constant";
import { addUpCommingMovies } from "../utils/movieSlice";
const useUpComingMovies = () => {
  // Fetch Data from TMDB API and Update store
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store)=>store.movies.upComingMovies);
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      // "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      // "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpCommingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
