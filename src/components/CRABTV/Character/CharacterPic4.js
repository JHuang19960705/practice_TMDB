import React from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CharacterPic4({ character4 }) {
  return (
    <a href="/該人物的內容.html" className="js-character-pic" datacelebrityid="${celebrities[i].id}" target="_blank">
      <div className="character-pic" >
        <img src={tmdbBaseURL + character4.profile_path} alt=""/>
      </div>
      <div className="character-name">{ character4.also_known_as[2] }</div>
    </a>
  )
}
