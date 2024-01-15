import React from 'react'
import NewsPic from './NewsPic'

export default function News({ favoriteMovie }) {
  return (
    <div>
      <div className="news-container">
        <div className="news-all">
          <a href="/新著記事.html" target="_blank">
            <div className="news-title">最新消息 ／</div>
          </a>
          <div className="news-all-wrap js-news-all-wrap">
            {
              favoriteMovie && 
              favoriteMovie.slice(6, 9).map((f) => {
                return <NewsPic favoriteMovie={f}/>
              })
            }
          </div>
        </div>
        <div className="view-all">
          <a href="/新著記事.html" target="_blank">
            <span>VIEW ALL</span>
          </a>
        </div>
      </div>

      <div className="news-controls">
        <span className="news-prev  js-news-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
        <span className="news-next  js-news-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
      </div>
    </div>
  )
}
