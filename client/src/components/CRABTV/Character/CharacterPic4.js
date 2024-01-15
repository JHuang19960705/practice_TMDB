import React from 'react'
import { Outlet, Link } from "react-router-dom"
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CharacterPic4({ character4 }) {
  return (
    <Link to={`/character/${character4.id}`} className="js-character-pic" datacelebrityid="${celebrities[i].id}" target="_blank">
      <div className="character-pic" >
        <img src={tmdbBaseURL + character4.profile_path} alt=""/>
      </div>
      <div className="character-name">{ character4.also_known_as[8] }</div>
      <Outlet />
    </Link>
  )
}
