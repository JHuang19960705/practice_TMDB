import React, { useEffect, useState } from 'react'
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";


export default function Theme({genre, setNewThemeId, handleChangeOpen}) {
  const [isLoading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);
  
  const search = async(URL) => {
    let result = await axios.get(URL);
    setVideo(result.data.results);
    setLoading(false);
  }

  useEffect(() => {
    if(genre){
      const genresURL = `https://api.themoviedb.org/3/discover/tv?with_origin_country=JP&api_key=${API_KEY}&with_genres=${genre.id}`
      search(genresURL)
    }
  },[genre])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      {genre && video && 
        <div class="archive_item mb-12">
          <h2 class="archive_heading">{genre.name}</h2>
          <div class="archive_index">
            <div class="num"></div>
            <div onClick={() => { handleChangeOpen(); setNewThemeId(genre.id)}} class="heading">選擇</div>
          </div>
          <div class="archive_content">
            <div class="archive_col1">
              <div>
                <a><img class="archive_kv" src={tmdbBaseURL + video[0].poster_path} /></a>
              </div>
            </div>
              <div class="archive_col2">
                {video.slice(1, 5).map((v) => {
                  return <img src={tmdbBaseURL + v.poster_path} />
                })}
              </div>
          </div>
        </div>
      }
    </div>
  )
}
