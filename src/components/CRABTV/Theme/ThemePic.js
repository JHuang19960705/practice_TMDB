import React from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function ThemePic({ data }) {
  return (
    <div class="theme-pic js-theme-pic">
      <a href="該影集的內容.html" target="_blank">
      <img src={tmdbBaseURL + data.backdrop_path} />
      </a>
    </div>
  )
}

export default ThemePic;