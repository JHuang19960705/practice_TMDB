import React from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function ThemePic({ genresVideo }) {

  return (
    <div className="theme-pic js-theme-pic">
      {genresVideo && genresVideo.poster_path && 
        <img src={tmdbBaseURL + genresVideo.poster_path} />
      }
    </div>
  )

}

export default ThemePic;