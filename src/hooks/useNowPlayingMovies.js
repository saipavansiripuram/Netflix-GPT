import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from '../utils/movieSlice';
import { useSelector } from 'react-redux';

 const useNowPlayingMovies = ()=>{
    // Fetch Data from TMDB API and Update store 
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
  
      const json = await data.json();
    
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
     !nowPlayingMovies && getNowPlayingMovies();
    }, []);
}


export default useNowPlayingMovies;



