import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;

function SlidePic({TMDBId}) {
  let [movieAll, setMovieAll] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const MovieURL = `https://api.themoviedb.org/3/tv/${TMDBId}?api_key=${API_KEY}&language=ja-JP`
  const search = async (URL) => {
    let result = await axios.get(URL);
    setMovieAll(result.data);
    setLoading(false);
  };
  useEffect(()=>{
    search(MovieURL);  
  }, [])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <Link to={`/movie/${movieAll.id}`} target="_blank" className="slide js-slide">
      <img src={tmdbBaseURL + movieAll.backdrop_path} />
    </Link>
  )
}

export default SlidePic;