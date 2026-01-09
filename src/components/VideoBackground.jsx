import { useSelector } from "react-redux";

import useTrailerVideo from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
  //accessing trailer key
  const trailerKey = useSelector((store) => store.movies.trailerVideo);

  //fetching trailer video
  useTrailerVideo(movieId);
  return (
    <div className="w-screen">
      <iframe className="w-screen h-screen aspect-video"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey?.key +
          "?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3" 
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
