import React from 'react'
import { Outlet, Link } from "react-router-dom"

export const Picture = ({ data }) => {
  const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1></h1>
      <div className="picture">
        <p>{data.title}</p>
        <Link to={`/movie/${data.id}`} className="imageContainer" target="_blank">
          <img src={ tmdbBaseURL + data.poster_path} />
        </Link>
        <Outlet/>
      </div>
      <div className="member-button">
        <Link to={`/postContent/${data.id}`} className='reviews-writing' target="_blank">
          撰寫影評
        </Link>
        <Link to="/shopping" target="_blank">
          放入電影院
        </Link>
      </div>
    </div>
  )
}

export default Picture; 