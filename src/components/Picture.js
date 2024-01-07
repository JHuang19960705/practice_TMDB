import React from 'react'

export const Picture = ({ data }) => {
  const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1></h1>
      <div className="picture">
        <p>{data.title}</p>
        <div className="imageContainer">
          <img src={ tmdbBaseURL + data.poster_path} />
        </div>
      </div>
      <p>
        在此下載圖片:{" "}
        <a target="_blank" href={ tmdbBaseURL + data.poster_path}>
          按一下
        </a>
      </p>
    </div>
  )
}

export default Picture; 