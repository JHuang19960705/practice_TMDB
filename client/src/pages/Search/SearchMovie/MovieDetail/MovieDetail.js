import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Information from '../../../../components/Movie/Information';
import Charater from '../../../../components/Movie/Charater';
import "../../../../styles/movie-page.css";
const API_KEY = process.env.REACT_APP_API_KEY;


export default function MovieDetail() {
  const { TMDBId } = useParams();
  const [isLoading, setLoading] = useState(true);
  let [movieAll, setMovieAll] = useState(null);
  let [casts, setCasts] = useState(null);
  const movieURL = `https://api.themoviedb.org/3/movie/${TMDBId}?api_key=${API_KEY}&language=ja-JP`
  const CastURL = `https://api.themoviedb.org/3/movie/${TMDBId}/credits?api_key=${API_KEY}&language=ja-JP`
  const search = async (URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2);
    setMovieAll(result1.data);
    setCasts(result2.data.cast);
    setLoading(false);
  };
  useEffect(()=>{
    search(movieURL, CastURL);  
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  
  return (
    <div className="kondo-wrap js-kondo-wrap">
      {movieAll && <Information videoAll={movieAll} />}
      {casts && casts.length > 4 && <Charater casts={casts}/>}
    </div>

  )
}





