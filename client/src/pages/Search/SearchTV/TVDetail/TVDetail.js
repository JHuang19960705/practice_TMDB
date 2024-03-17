import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Information from '../../../../components/Movie/Information';
import Charater from '../../../../components/Movie/Charater';
import "../../../../styles/movie-page.css";
const API_KEY = process.env.REACT_APP_API_KEY;


export default function TVDetail() {
  const { TMDBId } = useParams();
  const [isLoading, setLoading] = useState(true);
  let [TVAll, setTVAll] = useState(null);
  let [casts, setCasts] = useState(null);
  const TVURL = `https://api.themoviedb.org/3/tv/${TMDBId}?api_key=${API_KEY}&language=ja-JP`
  const CastURL = `https://api.themoviedb.org/3/tv/${TMDBId}/credits?api_key=${API_KEY}&language=ja-JP`
  const search = async (URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2);
    setTVAll(result1.data);
    setCasts(result2.data.cast);
    setLoading(false);
  };
  useEffect(()=>{
    search(TVURL, CastURL);  
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  
  return (
    <div className="kondo-wrap">
      {TVAll && <Information videoAll={TVAll} />}
      {casts && casts.length > 4 && <Charater casts={casts}/>}
    </div>

  )
}





