import React from 'react'
import { Link } from 'react-router-dom';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";


export default function UserAllReview({ review }) {

  return (
    <div>
      {review &&
        <div class="archive_item">
          <div class="archive_heading">{review.tags[0]}</div>
          <div class="archive_index">
            <div class="num"></div>
            <Link to={`${review._id}`} class="heading">瀏覽</Link>
          </div>
          <div class="archive_content">
            <div class="archive_content_wrap">
              <div>
                <a><img class="archive_kv" src={tmdbBaseURL + review.TMDBImg} /></a>
              </div>
              <h3 class="archive_title">
                <div class="jp">{review.title}</div>
              </h3>
              <p class="archive_description">{review.content}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
