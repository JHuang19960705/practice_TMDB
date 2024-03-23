import React from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Charater({ casts }) {

    return (
        <div class="movie-character">
            <p class="movie-character-title">登場人物</p>
            <div class="movie-character-wrap">
                <div class="movie-character-left">
                    <div class="movie-character-list1">
                        <img class="movie-first-img" src={casts[0].profile_path && (tmdbBaseURL + casts[0].profile_path)} alt="" data-cast={casts[0].id} />
                        <div class="movie-character-list2">
                            <img src={casts[1].profile_path && (tmdbBaseURL + casts[1].profile_path)} alt="" data-cast={casts[1].id} />
                            <img src={casts[2].profile_path && (tmdbBaseURL + casts[2].profile_path)} alt="" data-cast={casts[2].id} />
                            <img src={casts[3].profile_path && (tmdbBaseURL + casts[3].profile_path)} alt="" data-cast={casts[3].id} />
                        </div>
                    </div>
                    <div class="movie-character-profile">
                        <p class="movie-character-name">
                            {casts[0].name}
                        </p>
                        <p class="movie-character-real-name">
                            演 - <span>{casts[0].character}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
