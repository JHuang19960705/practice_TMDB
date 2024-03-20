import React from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";


export default function Review({review, setNewReview, handleChangeOpen}) {

  return (
    <div>
      {review && 
        <div className="archive_item">
          <div className="archive_heading">{review.tags[0]}</div>
          <div className="archive_index">
            <div className="num"></div>
            <div onClick={() => { handleChangeOpen(); setNewReview(review)}} className="heading">選擇</div>
          </div>
          <div className="archive_content">
            <div className="archive_content_wrap">
              <div>
                <a><img className="archive_kv" src={tmdbBaseURL + review.TMDBImg} /></a>
              </div>
              <h3 className="archive_title">
                <div className="jp">{review.title}</div>
              </h3>
              <p className="archive_description">{review.content}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
