import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch((store) => store.gptMovies);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // make an API call to GET movie results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ".only give me names of the 5 movies ,comma separated like the example . If I search Movie Name must Include that movie name in the List.Every respones must be like this Example Result:Gadar, Sholey, Bahubali, Don, Golmaal, RRR .";
    const gptResutls = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResutls.choices?.[0]?.message?.content);

    const gptMovies = gptResutls.choices?.[0]?.message?.content.split(",");

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // It will result [Promose , Promise , Promise, Promise, Promise]
    // console.log(promiseArray);

    const tmdbResults = await Promise.all(promiseArray); // Promise all resolves the promises
    // tmmdb results resolve all the promises and get the results
    // console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[55%] md:pt-[14%] flex sm:items-center md:justify-center ">
      <form
        className="w-11/12 md:w-1/2 bg-gray-20 bg-transparent grid grid-cols-12 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 px-6 mx-4 md:p-4 md:m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="md:py-4 md:px-4  md:m-4 rounded-xl bg-red bg-red-700 text-white col-span-3 "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
