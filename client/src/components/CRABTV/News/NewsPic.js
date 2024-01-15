import React from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function NewsPic({ favoriteMovie }) {
  return (
    <div>
      <div className="news-wrap">
        <div className="news-wrap-icon">
          <div>
            <a href="/新聞頁面.html" target="_blank">
              <img src={tmdbBaseURL + favoriteMovie.backdrop_path} className="js-news-click js-new-drag" datanewsid="${news[i].id}" />
            </a>
          </div>  
        </div>
        <div className="news-wrap-press">
            <div>
                <div className="news-wrap-moji-time"></div>
                <a href="/新聞頁面.html" className="news-wrap-moji-content js-news-click" datanewsid="${news[i].id}" target="_blank">
                  { favoriteMovie.overview }
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
