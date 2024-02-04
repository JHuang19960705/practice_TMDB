import React from 'react'
import { Outlet, Link } from "react-router-dom"

export default function SlidePic({ slide, setSlide, currentUser, data }) {
  const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
  const handleSlide = (e) => {
    let TMDBId = e.currentTarget.dataset.tmdbId;
    setSlide([...slide, TMDBId]);
  }
  return (
    <div>
      { data.poster_path && (
        <div className="picture">
          <p>{data.title}</p>
          <Link to={`/movie/${data.id}`} className="imageContainer" target="_blank">
            <img src={ tmdbBaseURL + data.poster_path} />
          </Link>
          <Outlet/>
          <button onClick={handleSlide} data-tmdb-id={data.id} className="btn btn-light btn-sm">選取slide</button>
        </div>
      )}
    </div>
  )
}
