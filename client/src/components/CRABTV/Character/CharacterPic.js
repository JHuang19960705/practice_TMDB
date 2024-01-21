import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CharacterPic({ castId }) {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const characterURL = `https://api.themoviedb.org/3/person/${castId}?api_key=${API_KEY}`;
  const search = async(url) => {
    let result = await axios.get(url);
    setCharacter(result.data);
    setLoading(false);
  }
  useEffect(()=>{
    search(characterURL);
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <Link to={`/character/${character.id}`} className="js-character-pic" data-cast-id={character.id} target="_blank">
      <div className="character-pic" >
        <img src={tmdbBaseURL + character.profile_path} alt={ character.also_known_as[0] } />
      </div>
      <div className="character-name">{ character.also_known_as[0] }</div>
      <Outlet />
    </Link>
  )
}
