import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Cast({ castId, setOldCast, handleChangeOpen1 }) {
  const [isLoading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const [castVideoImg, setCastVideoImg] = useState([]);

  useEffect(()=>{
    if(castId){
      const castURL = `https://api.themoviedb.org/3/person/${castId}?api_key=${API_KEY}`;
      const castVidoeImgURL = `https://api.themoviedb.org/3/person/${castId}/combined_credits?&api_key=${API_KEY}`;
      searchAll(castURL, castVidoeImgURL);
    }
  }, [castId])

  const searchAll = async(URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2);
    setCast(result1.data);
    setCastVideoImg(result2.data.cast);
    setLoading(false);
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      {cast && 
        <div class="archive_item">
          <h2 class="archive_heading">CHARACHER</h2>
          <div class="archive_index">
            <div class="num f-serif"></div>
            <div onClick={()=>{handleChangeOpen1(); setOldCast({ id: cast.id, name: cast.name })}} data-cast-id={cast.id} class="cursor-pointer heading rounded-md bg-green-500 px-3 py-1 text-white">修改</div>
          </div>
          <div class="archive_content">
            <div class="archive_col1">
              <div class="js-celebrity-click">
                {cast.profile_path && <a target="_blank"><img class="archive_kv" src={tmdbBaseURL + cast.profile_path} /></a>}
              </div>
              <h3 class="archive_title">
                {cast.also_known_as &&<div class="jp">{cast.also_known_as[0]}</div>}
                {cast.also_known_as && cast.also_known_as[2] && <div class="year f-serif">{cast.also_known_as[2]}</div>}
              </h3>
              {cast.biography && <p class="archive_description">{cast.biography}</p>}
            </div>
              <div class="archive_col2 js-celebrity-click">
                {castVideoImg && castVideoImg.slice(0, 4).map((img)=>{
                  return (<img key={img.id} src={tmdbBaseURL + img.poster_path}/>)
                })}
              </div>
          </div>
        </div>
      }
    </div>
  )
}
