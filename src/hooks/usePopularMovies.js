import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import {  addPopularMovies } from "../utils/moviesSlice";

export const usePopularMovies = () => {
    const dispatch = useDispatch();

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    popularMovies();
  }, []);

};
