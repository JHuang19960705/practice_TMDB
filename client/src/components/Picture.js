import React from 'react'
import { Outlet, Link } from "react-router-dom"

export const Picture = ({ currentUser, data }) => {
  const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
  return (
    <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
      <div className="picture">
        <p>{data.title}</p>
        <Link to={`/${data.id}/movie`} className="imageContainer" target="_blank">
          <img src={ tmdbBaseURL + data.poster_path} />
        </Link>
      </div>
      { currentUser && currentUser.user.role !== "free" && (
          <div className="member-button">
            <Link to={`/postContent/${data.id}`} className='reviews-writing' target="_blank">
              寫影評
            </Link>
            <Link to={`/reviews/${data.id}`} className='reviews-writing' target="_blank">
              看影評
            </Link>
          </div>
        )
      }
      { currentUser && currentUser.user.role == "free" && (
        <div className="member-button">
          <Link to={`/reviews/${data.id}`} className='reviews-writing' target="_blank">
            看影評
          </Link>
        </div>
        )
      }
    <Outlet />
    </button>
  )
}

export default Picture; 