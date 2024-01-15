import React from 'react'
import { Outlet, Link } from "react-router-dom"
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CharacterPic2({ character2 }) {
  return (
    <Link to={`/character/${character2.id}`} className="js-character-pic" datacelebrityid="${celebrities[i].id}" target="_blank">
      <div className="character-pic" >
        <img src={tmdbBaseURL + character2.profile_path} alt=""/>
      </div>
      <div className="character-name">{ character2.also_known_as[0] }</div>
      <Outlet />
    </Link>
  )
}
