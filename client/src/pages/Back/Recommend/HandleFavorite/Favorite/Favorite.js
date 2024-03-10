import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Favorite({ favoriteId, setOldFavorite, handleChangeOpen1 }) {
  const [isLoading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [favoriteVideoImg, setFavoriteVideoImg] = useState([]);

  useEffect(()=>{
    if(favoriteId){
      const favoriteURL = `https://api.themoviedb.org/3/person/${favoriteId}?api_key=${API_KEY}`;
      const favoriteVidoeImgURL = `https://api.themoviedb.org/3/person/${favoriteId}/combined_credits?&api_key=${API_KEY}`;
      searchAll(favoriteURL, favoriteVidoeImgURL);
    }
  }, [favoriteId])

  const searchAll = async(URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2);
    setFavorite(result1.data);
    setFavoriteVideoImg(result2.data.cast);
    setLoading(false);
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      {favorite && 
        <div class="archive_item">
          <h2 class="archive_heading">CHARACHER</h2>
          <div class="archive_index">
            <div class="num f-serif"></div>
            <div onClick={()=>{handleChangeOpen1(); setOldFavorite({ id: favorite.id, name: favorite.name })}} data-favorite-id={favorite.id} class="cursor-pointer heading rounded-md bg-green-500 px-3 py-1 text-white">修改</div>
          </div>
          <div class="archive_content">
            <div class="archive_col1">
              <div class="js-celebrity-click">
                {favorite.profile_path && <a target="_blank"><img class="archive_kv" src={tmdbBaseURL + favorite.profile_path} /></a>}
              </div>
              <h3 class="archive_title">
                {favorite.also_known_as &&<div class="jp">{favorite.also_known_as[0]}</div>}
                {favorite.also_known_as && favorite.also_known_as[2] && <div class="year f-serif">{favorite.also_known_as[2]}</div>}
              </h3>
              {favorite.biography && <p class="archive_description">{favorite.biography}</p>}
            </div>
              <div class="archive_col2 js-celebrity-click">
                {favoriteVideoImg && favoriteVideoImg.slice(0, 4).map((img)=>{
                  return (<img key={img.id} src={tmdbBaseURL + img.poster_path}/>)
                })}
              </div>
          </div>
        </div>
      }
    </div>
  )
}
