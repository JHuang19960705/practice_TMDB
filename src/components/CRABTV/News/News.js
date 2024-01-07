import React from 'react'
import NewsPic from './NewsPic'

export default function News({ data }) {
  return (
    <div>
      <div class="news-container">
        <div class="news-all">
          <a href="/新著記事.html" target="_blank">
            <div class="news-title">最新消息 ／</div>
          </a>
          <div class="news-all-wrap js-news-all-wrap">
            {
              data && 
              data.slice(6, 9).map((d) => {
                return <NewsPic data={d}/>
              })
            }
          </div>
        </div>
        <div class="view-all">
          <a href="/新著記事.html" target="_blank">
            <span>VIEW ALL</span>
          </a>
        </div>
      </div>

      <div class="news-controls">
        <span class="news-prev  js-news-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
        <span class="news-next  js-news-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
      </div>
    </div>
  )
}
