import React from 'react';
import { Outlet, Link } from "react-router-dom";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";


function ThemePic({ favoriteMovie }) {
  return (
    <div class="theme-pic js-theme-pic">
      <Link to={`/movie/${favoriteMovie.id}`} target="_blank">
        <img src={tmdbBaseURL + favoriteMovie.backdrop_path} />
        <Outlet />
      </Link>
    </div>
  )
}

export default ThemePic;