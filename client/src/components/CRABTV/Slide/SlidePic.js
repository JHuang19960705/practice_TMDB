import React from 'react';
import { Outlet, Link } from "react-router-dom";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function SlidePic({favoriteMovie}) {
  return (
    <Link to={`/movie/${favoriteMovie.id}`} target="_blank" className="slide js-slide">
      <img src={tmdbBaseURL + favoriteMovie.backdrop_path} />
    </Link>
  )
}

export default SlidePic;