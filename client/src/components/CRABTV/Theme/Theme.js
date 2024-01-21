import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import ThemePic from './ThemePic';
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const comedyTV_id = '215197';
function Theme() {
  const [isLoading, setLoading] = useState(true);
  const [comedy, setComedy] = useState([]);
  const comedyURL = `https://api.themoviedb.org/3/tv/${comedyTV_id}/similar?api_key=${API_KEY}&language=ja-JP&page=1`;
  const search = async(url) => {
    let result = await axios.get(url);
    setComedy(result.data.results);
    setLoading(false);
  }
  useEffect(()=>{
    search(comedyURL);
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div class="theme-wrap">
      <div class="theme">
        <div class="theme-left">
            <div class="theme-title"><p>主題推薦</p></div>
            <div class="theme-tags">
                <Link to="/shopping" target="_blank"><p>喜劇片</p></Link>
                <Link to="/shopping" target="_blank"><p>推理片</p></Link>
                <Link to="/shopping" target="_blank"><p>科幻片</p></Link>
                <Link to="/shopping" target="_blank"><p>紀錄片</p></Link>
                <Link to="/shopping" target="_blank"><p>恐怖片</p></Link>
                <Outlet />
            </div>
        </div>
        <div class="theme-right">
            <div class="theme-right-wrap">
                <div class="theme-pic-wrap">
                  {
                    comedy &&
                    comedy.map((comedy) => {
                      if (comedy.origin_country[0] == "JP" && comedy.backdrop_path) { 
                        return <ThemePic comedy={comedy}/>
                      }
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