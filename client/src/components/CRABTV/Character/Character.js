import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom"
import axios from "axios";
import CharacterPic from "./CharacterPic";
import CharacterPic2 from "./CharacterPic2";
import CharacterPic3 from "./CharacterPic3";
import CharacterPic4 from "./CharacterPic4";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Character() {
  let [character, setCharacter] = useState(null);
  let [character2, setCharacter2] = useState(null);
  let [character3, setCharacter3] = useState(null);
  let [character4, setCharacter4] = useState(null);
  let result1;
  let result2;
  let result3;
  let result4;
  const search = async() => {
    const person_id = "1257220";
    const person_id2 = "100765";
    const person_id3 = "585211";
    const person_id4 = "100766";
    const characterURL = `https://api.themoviedb.org/3/person/${person_id}?api_key=${API_KEY}`;
    const characterURL2 = `https://api.themoviedb.org/3/person/${person_id2}?api_key=${API_KEY}`;
    const characterURL3 = `https://api.themoviedb.org/3/person/${person_id3}?api_key=${API_KEY}`;
    const characterURL4 = `https://api.themoviedb.org/3/person/${person_id4}?api_key=${API_KEY}`;
    result1 = await axios.get(characterURL);
    setCharacter(result1.data);
    result2 = await axios.get(characterURL2);
    setCharacter2(result2.data);
    result3 = await axios.get(characterURL3);
    setCharacter3(result3.data);
    result4 = await axios.get(characterURL4);
    setCharacter4(result4.data);
  }
  useEffect(()=>{
    search();
  }, [])

  return (
    <div className="character-wrap">
      {/* <!-- 標題 --> */}
      <div className="character-title">
          <Link to="/character" target="_blank">
            <div className="character-title-p">
              <div>當紅角色 ／</div>
              <div className="character-title-p-arrow">＞＞</div>
            </div>
          </Link>
          <Outlet />
      </div>
      {/* <!-- 四個圈圈 --> */}
      <div className="character-container js-character-container-wrap">  
        {
          character && 
          <CharacterPic character={character}/>
        }
        {
          character2 && 
          <CharacterPic2 character2={character2}/>
        }
        {
          character3 && 
          <CharacterPic3 character3={character3}/>
        }
        {
          character4 && 
          <CharacterPic4 character4={character4}/>
        }
      </div>
    </div>
  )
}
