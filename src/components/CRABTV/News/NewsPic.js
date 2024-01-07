import React from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function NewsPic({ data }) {
  return (
    <div>
      <div class="news-wrap">
        <div class="news-wrap-icon">
          <div>
            <a href="/新聞頁面.html" target="_blank">
              <img src={tmdbBaseURL + data.backdrop_path} class="js-news-click js-new-drag" datanewsid="${news[i].id}" />
            </a>
          </div>  
        </div>
        <div class="news-wrap-press">
            <div>
                <div class="news-wrap-moji-time"></div>
                <a href="/新聞頁面.html" class="news-wrap-moji-content js-news-click" datanewsid="${news[i].id}" target="_blank">
                  { data.overview }
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
