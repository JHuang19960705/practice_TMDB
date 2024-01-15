import React from 'react';
import ThemePic from './ThemePic';
import { Outlet, Link } from "react-router-dom";

function Theme({ favoriteMovie }) {
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
                    favoriteMovie && 
                    favoriteMovie.slice(0, 6).map((f) => {
                      return <ThemePic favoriteMovie={f}/>
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