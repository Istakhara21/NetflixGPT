import React, { useEffect } from "react";
import { API_options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch trailer here
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_options
    );

    const json = await data.json();

    const filterData = json?.results.filter((video) => video.type == "Trailer");
    const trailer = filterData[0];
    dispatch(addTrailerVideo({ key: trailer?.key }));
  };

  //calling API
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
