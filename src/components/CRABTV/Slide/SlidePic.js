import React from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function SlidePic({data}) {
  return (
    <a href="/該影集的內容.html" target="_blank" className="slide js-slide">
      <img src={tmdbBaseURL + data.backdrop_path} />
    </a>
  )
}

export default SlidePic;