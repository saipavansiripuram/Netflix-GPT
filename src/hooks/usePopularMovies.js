import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useSelector } from 'react-redux';


const usePopularMovies = () => {
  // Fetch Data from TMDB API and Update store
  const dispatch = useDispatch();
  const popularMovies = useSelector(store=>store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies &&  getPopularMovies();
  }, []);
};

export default usePopularMovies;
