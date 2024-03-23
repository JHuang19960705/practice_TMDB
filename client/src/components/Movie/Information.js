import React from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Information({ videoAll }) {
    return (
        <div>
            <div className="movie-pic">
                <img src={videoAll.backdrop_path && tmdbBaseURL + videoAll.backdrop_path} />
            </div>
            <div className="movie-title">
                <p>{videoAll.original_name && videoAll.original_name}{videoAll.original_title && videoAll.original_title}</p>
            </div>
            <div className="movie-time">
                <p>{videoAll.release_date && videoAll.release_date.slice(0, 4) || videoAll.first_air_date && videoAll.first_air_date.slice(0, 4)}年</p>
                <p>{videoAll.release_date && videoAll.release_date.slice(5, 7) || videoAll.first_air_date && videoAll.first_air_date.slice(5, 7)}月{videoAll.release_date && videoAll.release_date.slice(8, 10)}{videoAll.first_air_date && videoAll.first_air_date.slice(8, 10)}日</p>
                <p>ON AIR</p>
            </div>

            <div className="movie-detail">
                <div className="movie-detail-wrap">
                    <div>
                        <p>{videoAll.production_countries[0] && videoAll.production_countries[0].name || videoAll.origin_country[0] && videoAll.origin_country[0]}</p>
                    </div>
                    <div>
                        <p>
                            {videoAll.release_date && videoAll.release_date || videoAll.first_air_date && videoAll.first_air_date}
                        </p>
                    </div>
                    <div>
                        <p>評分　{videoAll.popularity && videoAll.popularity}</p>
                    </div>
                </div>
            </div>

            {videoAll.overview && videoAll.backdrop_path &&
                <div className="movie-video-and-story">

                    <div className="movie-video">
                        <a className="movie-video-play">
                            <img src={videoAll.backdrop_path && (tmdbBaseURL + videoAll.backdrop_path)} />
                        </a>
                    </div>

                    <div className="movie-story">
                        <div className="movie-story-wrap">
                            <p>{videoAll.overview}</p>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}
