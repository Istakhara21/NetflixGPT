import { useSelector } from "react-redux";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRated";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const gptView = useSelector((store) => store.gpt.showGptSearch);
  //nowPlayingMovies fetching
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {gptView ? (
        <GptSearchPage />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* <GptSearch />
   
      <MainContainer />
      <SecondaryContainer /> */}
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
