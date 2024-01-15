import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;
const session_id = process.env.REACT_APP_SESSION_ID;
const account_id = process.env.REACT_APP_ACCOUNT_ID;
const favoriteMovieURL = `https://api.themoviedb.org/3/account/${account_id}/favorite/tv?api_key=${API_KEY}&session_id=${session_id}&page=1`


export default function Introduction({  movieId }) {
  let [introduction, setIntroduction] = useState(null); 
  let [favoriteMovie, setfavoriteMovie] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const filter = async (URL) => {
    let result = await axios.get(URL);
    // setfavoriteMovie ( result.data.results );
    setLoading(false);
  }


  useEffect(()=> {
    filter(favoriteMovieURL);
  }, [])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  // setIntroduction(favoriteMovie.filter(m => m.id != movieId));

  return (
    <div class="movie-introduction">
      {/* <div class="movie-introduction-title">
          <p>推薦作品</p>
      </div>
      <div class="movie-introduction-wrap">
          <div class="movie-introduction-wrap-card">
              <div class="movie-introduction-wrap-card-pic">
                  <Link to={`/movie/${introduction[0].id}`} >
                    <img src={tmdbBaseURL + introduction[0].backdrop_path} alt=""/>
                  </Link>
                  <Outlet />
              </div>
              <div class="movie-introduction-wrap-card-text">
                  <p>{introduction[0].overview}</p>
              </div>
              <div class="movie-introduction-wrap-card-more">
                  <p>更多介紹</p>
              </div>
          </div>
          <div class="movie-introduction-wrap-card">
              <div class="movie-introduction-wrap-card-pic">
                <Link to={`/movie/${introduction[1].id}`} >
                  <img src={tmdbBaseURL + introduction[1].backdrop_path} alt=""/>
                </Link>
                <Outlet />
              </div>
              <div class="movie-introduction-wrap-card-text">
                  <p>{introduction[1].overview}</p>
              </div>
              <div class="movie-introduction-wrap-card-more">
                  <p>更多介紹</p>
              </div>
          </div>
          <div class="movie-introduction-wrap-card">
              <div class="movie-introduction-wrap-card-pic">
                <Link to={`/movie/${introduction[2].id}`} > 
                  <img src={tmdbBaseURL + introduction[2].backdrop_path} alt=""/>
                </Link>
                <Outlet />
              </div>
              <div class="movie-introduction-wrap-card-text">
                  <p>{introduction[2].overview}</p>
              </div>
              <div class="movie-introduction-wrap-card-more">
                  <p>更多介紹</p>
              </div>
          </div>
          <div class="movie-intr-arrow">
            <span class="movie-intr-prev js-movie-intr-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
            <span class="movie-intr-next js-movie-intr-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
          </div>
      </div>     */}
    </div>
  )
}
