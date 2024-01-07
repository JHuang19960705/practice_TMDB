import React from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Charater({ casts }) {

  return (
    <div class="movie-character">
            <p class="movie-character-title">登場人物</p>
            <div class="movie-character-wrap">
                <div class="movie-character-left">
                    <div class="movie-character-list1">
                        <img class="movie-first-img" src={tmdbBaseURL + casts[0].profile_path} alt="" data-cast={casts[0].id}/>
                        <div class="movie-character-list2">
                            <img src={tmdbBaseURL + casts[1].profile_path} alt="" data-cast={casts[1].id}/>
                            <img src={tmdbBaseURL + casts[2].profile_path} alt="" data-cast={casts[2].id}/>
                            <img src={tmdbBaseURL + casts[3].profile_path} alt="" data-cast={casts[3].id}/>
                        </div>
                    </div>
                    <div class="movie-character-profile">
                        <p class="movie-character-name">
                        {casts[0].name}
                        </p>
                        <p class="movie-character-real-name">
                            演 - <span>{casts[0].character}</span>
                        </p>
                        <div class="movie-character-comment">
                            <p>
                              {}          
                            </p>
                        </div>
                    </div>
                </div>
                <div class="movie-character-right">
                    <div class="movie-character-spotlight"></div>
                    <img class="movie-character-img" src="${product.cast[0].bodyImg}"/>
                    <div class="movie-character-arrow">
                      <span class="movie-character-prev js-movie-character-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
                      <span class="movie-character-next js-movie-character-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
                  </div>
                </div>
            </div>

        </div>
  )
}
