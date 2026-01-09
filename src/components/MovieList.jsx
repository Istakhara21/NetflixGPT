import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div >
      <div className="px-10 py-2 ">
        <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard className="px-2" key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
