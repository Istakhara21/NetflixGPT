import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRated";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //nowPlayingMovies fetching
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
         MainContainer
         - Video Container
         - Video Title
         Secondary Container
         - Movie list * n
           - Movie Card * n  
       */}
    </>
  );
};

export default Browse;
