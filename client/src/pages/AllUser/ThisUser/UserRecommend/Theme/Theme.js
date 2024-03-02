import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
function Theme({userRecommend}) {
  const [isLoading, setLoading] = useState(true);
  let [genresId, setGenresId] = useState(null);
  let [genresURL, setGenresURL] = useState(null);
  let genres = [
    {
      "id": "10759",
      "name": "動作片"
    },
    {
      "id": "16",
      "name": "動畫片"
    },
    {
      "id": "35",
      "name": "喜劇片"
    },
    {
      "id": "80",
      "name": "犯罪片"
    },
    {
      "id": "99",
      "name": "紀錄片"
    },
    {
      "id": "18",
      "name": "戲劇片"
    },
    {
      "id": "10751",
      "name": "闔家片"
    },
    {
      "id": "10762",
      "name": "兒童片"
    },
    {
      "id": "9648",
      "name": "懸疑片"
    },
    {
      "id": "10765",
      "name": "科幻片"
    }]
  useEffect(() => {
    if(userRecommend){
      setGenresId(userRecommend.theme[0]);
      setGenresURL( `https://api.themoviedb.org/3/discover/tv?with_origin_country=JP&api_key=${API_KEY}&with_genres=${genresId}`)
      search(genresURL)
    }
  },[userRecommend])
  
  const search = async(URL) => {
    let result = await axios.get(URL);
    setGenresId(result.data.results);
    setLoading(false);
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const changeTheme = async(e) => {
    setGenresId(e.currentTarget.dataset.genreId);
    setGenresURL(`https://api.themoviedb.org/3/discover/tv?with_origin_country=JP&api_key=${API_KEY}&with_genres=${genresId}`)
    await search(genresURL)
  }

  
  return (
    <div class="theme-wrap">
      <div class="theme">
        <div class="theme-left">
            <div class="theme-title"><p>主題推薦</p></div>
            <div class="theme-tags">
                { userRecommend.theme.map((t) => {
                    return genres.map((g) => {
                      if(g.id == t){
                        return (<button onClick={changeTheme} className="btn" data-genre-id={t}><p>{g.name}</p></button>)
                      }
                    })
                  })
                }
            </div>
        </div>
        <div class="theme-right">
            <div class="theme-right-wrap">
                <div class="theme-pic-wrap">
                  {
                    genresId &&
                    genresId.map((g) => {  
                      return (
                        <div class="theme-pic js-theme-pic">
                          { <Link to={`/movie/${g.id}`} target="_blank">
                            <img src={tmdbBaseURL + g.backdrop_path} />
                            <Outlet />
                          </Link> }
                        </div>
                      )
                    })
                  }
                </div>
            </div>    
        </div>
      </div>
    </div>
  )
}

export default Theme;