import React from 'react'
import {MOVIE_POSTER_URL} from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="flex-shrink-0">
        <img className="w-48 h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"  src={MOVIE_POSTER_URL + posterPath} alt="" />
    </div>
  )
}

export default MovieCard