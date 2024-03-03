import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsPic({ news }) {
  
  return (
    <div>
      <div className="news-wrap">
        <div className="news-wrap-icon">
          <div>
            <Link to={news.url} target="_blank">
              <img src={news.image} className="js-news-click js-new-drag" />
            </Link>
          </div>  
        </div>
        <div className="news-wrap-press">
            <div>
                <div className="news-wrap-moji-time">{news.publishedAt}</div>
                <Link to={news.url} className="news-wrap-moji-content js-news-click" target="_blank">
                  { news.title }
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
