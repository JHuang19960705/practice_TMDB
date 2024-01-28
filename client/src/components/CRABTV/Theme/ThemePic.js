import React from 'react';
import { Outlet, Link } from "react-router-dom";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";


function ThemePic({  }) {
  return (
    <div class="theme-pic js-theme-pic">
      {/* <Link to={`/movie/${comedy.id}`} target="_blank">
        <img src={tmdbBaseURL + comedy.backdrop_path} />
        <Outlet />
      </Link> */}
    </div>
  )
}

export default ThemePic;