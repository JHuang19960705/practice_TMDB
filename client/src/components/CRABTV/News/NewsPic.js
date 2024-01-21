import React from 'react'
import { Outlet, Link } from "react-router-dom"

export default function NewsPic({ news }) {
  return (
    <div>
      <div className="news-wrap">
        <div className="news-wrap-icon">
          <div>
            <Link to={news.url} target="_blank">
              <img src={news.urlToImage} className="js-news-click js-new-drag" datanewsid="${news[i].id}" />
            </Link>
          </div>  
        </div>
        <div className="news-wrap-press">
            <div>
                <div className="news-wrap-moji-time">{news.publishedAt}</div>
                <Link to={news.url} className="news-wrap-moji-content js-news-click" datanewsid="${news[i].id}" target="_blank">
                  { news.title }
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
