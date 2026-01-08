import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //nowPlayingMovies fetching
  useNowPlayingMovies();

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
