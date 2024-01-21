import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function NewsRanking({news}) {
  return (
    <li>
      <article>
          <Link to={news.url}  target="_blank">
              <div class="img-box">
                  <p class="img js-news-page-click" 
                      style={{backgroundImage: `url(${news.image})`}}>
                  </p>
              </div>
              <div class="txt-box">
                  <p class="tit js-news-page-click">{news.title}</p>
                  <div class="sta-box">
                      <p class="data">{news.publishedAt.slice(0, 10)}</p>
                  </div>
              </div>
          </Link>
      </article>
    </li>
  )
}
