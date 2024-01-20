import React from 'react'
import { Outlet, Link } from "react-router-dom"

export const Picture = ({ currentUser, data }) => {
  const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="picture">
        <p>{data.title}</p>
        <Link to={`/movie/${data.id}`} className="imageContainer" target="_blank">
          <img src={ tmdbBaseURL + data.poster_path} />
        </Link>
        <Outlet/>
      </div>
      { currentUser && currentUser.user.role == "premium" && (
          <div className="member-button">
            <Link to={`/postContent/${data.id}`} className='reviews-writing' target="_blank">
              撰寫影評
            </Link>
            <Link to="/shopping" target="_blank">
              放入電影院
            </Link>
            <Link to="/" target="_blank">
              放入電影大廳
            </Link>
          </div>
        )
      }
      { currentUser && currentUser.user.role == "standard" && (
        <div className="member-button">
          <Link to={`/postContent/${data.id}`} className='reviews-writing' target="_blank">
            撰寫影評
          </Link>
          <Link to="/" target="_blank">
            放入電影大廳
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
    </div>
  )
}

export default Picture; 