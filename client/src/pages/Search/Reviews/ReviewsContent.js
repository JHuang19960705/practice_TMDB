import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ContentService from "../../../services/content.service";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function ReviewsContent({ currentUser }) {
  const { TMDBId } = useParams();
  const [contentData, setContentData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let _id;

    if (currentUser) {
      _id = TMDBId;

      if (currentUser.user.role == "standard" || currentUser.user.role == "premium") {
        ContentService.getReviewsByTMDBId(_id)
          .then((data) => {
            setContentData(data.data);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "free") {
        ContentService.getReviewsByTMDBId(_id)
          .then((data) => {
            setContentData(data.data);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }

  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const last = contentData.length - 1

  return (
    <div className="blog">
      {!contentData[contentData.length - 1] && <div className="flex items-center mt-20 md:mt-10 justify-center text-base md:text-2xl">這篇還沒有影評唷～</div>}
      {contentData && contentData[contentData.length - 1] && (
        <div className="blog-title">
          <div>
            <div className="blog-title-text">
              <p>{contentData[last].title}</p>
            </div>
            <div className="blog-title-date">
              <p>{contentData[last].date.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      )}
      {contentData && contentData[contentData.length - 1] && (
        <div className="blog-content">
          <div className="blog-writer">

            <div className="writer-now">
              <div className="writer-wrap">
                <div className="writer-pic">
                  <img src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" />
                </div>
                <p>{contentData[last].writer.username}</p>
              </div>
              <div className="blog-content-hr"><hr /></div>
              <div className="blog-tags">
                {contentData[last] && (
                  <div><p>#{contentData[last].tags[0]}</p></div>
                )}
              </div>
            </div>

            {contentData && contentData.slice(0, -1).map((cw) => {
              return (
                <div className="writer-next">
                  <p>{cw.writer.username}</p>
                  <p>の感想・評価</p>
                </div>
              )
            })}


          </div>
          <div className="blog-article">
            {contentData[last] && (
              <div className="blog-article-content">
                <div className="blog-articale-pic">
                  <img src={tmdbBaseURL + contentData[last].TMDBImg} alt="" />
                </div>
                <div className="blog-articale-paragraph">
                  {contentData[last].content}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
