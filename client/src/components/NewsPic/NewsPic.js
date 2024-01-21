import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

export default function NewsPic({news}) {
  return (
    <li>
        <article>
          <Link to={news.url} target="_blank">
              <div class="img-box js-news-page-click" >
                  <div class="img" 
                    style={{backgroundImage: `url(${news.urlToImage})`}}
                  >
                  </div>
                  <p class="tag">本週最新</p>
              </div>
              <div class="txt-box">
                  <p class="cat">ニュース </p>
                  <p class="tit js-news-page-click" >{news.title}</p>
                  <div class="sta-box">
                      {/* <p class="outh">By {news.auther} </p> */}
                      <p class="data">{news.publishedAt.slice(0, 4)}年{news.publishedAt.slice(5, 7)}月{news.publishedAt.slice(8, 10)}日</p>
                  </div>
              </div>
          </Link>
        </article>
      </li>
  )
}
