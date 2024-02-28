import React, { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import Information from '../../../../components/Movie/Information';
import Charater from '../../../../components/Movie/Charater';
import Introduction from '../../../../components/Movie/Introduction';
import "../../../../styles/movie-page.css";
const API_KEY = process.env.REACT_APP_API_KEY;


export default function TVDetail() {
  const { TMDBId } = useParams();
  const [isLoading, setLoading] = useState(true);
  let [movieAll, setMovieAll] = useState(null);
  let [casts, setCasts] = useState(null);
  const MovieURL = `https://api.themoviedb.org/3/tv/${TMDBId}?api_key=${API_KEY}&language=ja-JP`
  const CastURL = `https://api.themoviedb.org/3/tv/${TMDBId}/credits?api_key=${API_KEY}&language=ja-JP`
  const search = async (URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2);
    setMovieAll(result1.data);
    setCasts(result2.data.cast);
    setLoading(false);
  };
  useEffect(()=>{
    search(MovieURL, CastURL);  
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  
  return (
    <div className="kondo-wrap js-kondo-wrap">
      {movieAll && <Information movieAll={movieAll} />}
      {casts[0] && casts[1] && casts[2] && casts[3] && <Charater casts={casts}/>}
      {/* <Marquee /> */}
      {/* <Comment /> */}
      {/* <Introduction  movieId={movieId} /> */}
      {/* <Link to={`/reviews/${movieId}`} className='d-flex justify-content-center'><button className="btn btn-success">看影評</button></Link> */}
    </div>

  )
}





