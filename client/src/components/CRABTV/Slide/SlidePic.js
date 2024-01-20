import React from 'react';
import { Outlet, Link } from "react-router-dom";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function SlidePic({slideImg}) {
  return (
    <Link target="_blank" className="slide js-slide">
      <img src={tmdbBaseURL + slideImg} />
    </Link>
  )
}

export default SlidePic;