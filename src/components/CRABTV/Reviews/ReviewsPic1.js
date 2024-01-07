import React from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function ReviewsPic({ data }) {
  return (
    <div className="media-studies-article">
      <a href="/影評.html" target="_blank" >
        <img src={tmdbBaseURL + data.backdrop_path} alt="" className="js-review-click" datareviewid="${reviews[i].id}"/>
      </a>
      <a href="/影評.html" target="_blank" className="media-studies-article-title js-review-click" datareviewid="${reviews[i].id}">
        <p>劇評｜{data.title}</p>
      </a>
      <p className="media-studies-article-text">
        {data.overview}
      </p>
    </div>
  )
}

export default ReviewsPic;