import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and Update store
  const dispatch = useDispatch();
  const topRated = useSelector(store=>store.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
   !topRated && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
