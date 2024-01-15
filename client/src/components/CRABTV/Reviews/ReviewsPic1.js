import React from 'react'
import { Outlet, Link } from "react-router-dom";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function ReviewsPic({ favoriteMovie }) {
  return (
    <div className="media-studies-article">
      <Link to={`/reviews/${favoriteMovie.id}`} target="_blank" >
        <img src={tmdbBaseURL + favoriteMovie.backdrop_path} alt="" className="js-review-click" datareviewid="${reviews[i].id}"/>
      </Link>
      <Link to={`/reviews/${favoriteMovie.id}`} target="_blank" className="media-studies-article-title js-review-click" datareviewid="${reviews[i].id}">
        <p>劇評｜{favoriteMovie.title}</p>
      </Link>
      <Outlet />
      <p className="media-studies-article-text">
        {favoriteMovie.overview}
      </p>
    </div>
  )
}

export default ReviewsPic;