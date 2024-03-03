import React from 'react';
import { Link } from 'react-router-dom';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";


function ThemePic({ genresVideo }) {
  return (
    <div class="theme-pic js-theme-pic">
      <Link 
        // to={`/search/video/${genresVideo.id}`} 
      >
        <img src={tmdbBaseURL + genresVideo.backdrop_path} />
      </Link>
    </div>
  )
}

export default ThemePic;