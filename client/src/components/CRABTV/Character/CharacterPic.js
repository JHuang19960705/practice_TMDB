import React from 'react'
import { Outlet, Link } from "react-router-dom"
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CharacterPic({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="js-character-pic" datacelebrityid="${celebrities[i].id}" target="_blank">
      <div className="character-pic" >
        <img src={tmdbBaseURL + character.profile_path} alt=""/>
      </div>
      <div className="character-name">{ character.also_known_as[4] }</div>
      <Outlet />
    </Link>
  )
}
