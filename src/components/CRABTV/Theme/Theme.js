import React from 'react';
import ThemePic from './ThemePic';

function Theme({ data }) {
  return (
    <div class="theme-wrap">
      <div class="theme">
        <div class="theme-left">
            <div class="theme-title"><p>主題推薦</p></div>
            <div class="theme-tags">
                <a href="./購物網站.html" target="_blank"><p>喜劇片</p></a>
                <a href="./購物網站.html" target="_blank"><p>推理片</p></a>
                <a href="./購物網站.html" target="_blank"><p>科幻片</p></a>
                <a href="./購物網站.html" target="_blank"><p>紀錄片</p></a>
                <a href="./購物網站.html" target="_blank"><p>恐怖片</p></a>
            </div>
        </div>
        <div class="theme-right">
            <div class="theme-right-wrap">
                <div class="theme-pic-wrap">
                  {
                    data && 
                    data.slice(0, 6).map((d) => {
                      return <ThemePic data={d}/>
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