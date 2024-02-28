import React from 'react'
import { Outlet, Link } from "react-router-dom"
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function TheaterPic({data, currentUser, display, setDisplay, setMovie}) {
  const handleDisplay = () => {
    setMovie(data)
    setDisplay("block")
  }
  return (
    <div>
      <div className="picture">
        <p>{data.title}</p>
        <Link to={`/movie/${data.id}`} className="imageContainer" target="_blank">
          <img src={ tmdbBaseURL + data.poster_path} />
        </Link>
        <Outlet/>
      </div>
      <div className="member-button">
        <Link onClick={handleDisplay} data-tmdbid={data.id}>
          放入電影院
        </Link>
      </div>
    </div>
  )
}
