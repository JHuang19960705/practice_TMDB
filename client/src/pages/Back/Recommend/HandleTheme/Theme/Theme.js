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
        <div className="archive_item mb-12">
          <h2 className="archive_heading">{genre.name}</h2>
          <div className="archive_index">
            <div className="num"></div>
            <div onClick={() => { handleChangeOpen(); setNewThemeId(genre.id)}} className="heading">選擇</div>
          </div>
          <div className="archive_content">
            <div className="archive_col1">
              <div>
                <a><img className="archive_kv" src={tmdbBaseURL + video[0].poster_path} /></a>
              </div>
            </div>
              <div className="archive_col2">
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
