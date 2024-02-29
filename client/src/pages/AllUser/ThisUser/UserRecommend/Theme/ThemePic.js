import React from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";


function ThemePic({  }) {
  return (
    <div class="theme-pic js-theme-pic">
      <button to={`/movie/${comedy.id}`} target="_blank">
        <img src={tmdbBaseURL + comedy.backdrop_path} />
      </button>
    </div>
  )
}

export default ThemePic;