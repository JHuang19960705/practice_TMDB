import React from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Information({ movieAll }) {
  return (
    <div>
      <div class="movie-pic">
        <img src={tmdbBaseURL + movieAll.backdrop_path} />
      </div>
      <div class="movie-title">
          <p>{movieAll.original_name}</p>
      </div>
      <div class="movie-time">
          <p>毎週</p>
          <p>土曜夜10:00</p> 
          <p>ON AIR</p>
      </div>

        <div class="movie-detail">
            <div class="movie-detail-wrap">
                <div>
                    <p>{movieAll.origin_country}</p>
                </div>
                <div>
                    <p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </p>
                </div>
                <div>
                    <p>製作国</p>
                </div>
            </div>
        </div>

        <div class="movie-video-and-story">

            <div class="movie-video">
                <a class="movie-video-play">
                <img src={tmdbBaseURL + movieAll.backdrop_path} />
                </a>
            </div>

            <div class="movie-story">
                <div class="movie-story-wrap">
                    <p>{movieAll.overview}</p>
                </div>
            </div>

        </div>
    </div>
  )
}
