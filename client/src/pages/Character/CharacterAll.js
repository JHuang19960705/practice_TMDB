import React, { useState, useEffect } from "react";
import Cast from "../../components/Charactor/Cast";
import axios from "axios";
import "../../styles/celebrity-index.css";
const API_KEY = process.env.REACT_APP_API_KEY;


export default function CharacterAll() {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
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
    result2 = await axios.get(characterURL2);
    result3 = await axios.get(characterURL3);
    result4 = await axios.get(characterURL4);
    setCharacter([...character, result1.data, result2.data, result3.data, result4.data]);
    setLoading(false);
  }
  useEffect(()=>{
    search();
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }


  return (
    <section className="archive js-celebrities-wrap" >
      { 
        character && 
        character.map((c) => {
          return <Cast character={c}/>
        })
      }
    </section>
  )
}
