import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import ContentService from "../../../services/content.service";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function ReviewsPic({ contentId, currentUser }) {
  const [isLoading, setLoading] = useState(true);
  const [contentData, setContentData] = useState(null);
  useEffect(() => {
    ContentService.getContentByContentId(contentId)
      .then((data) => {
        setContentData(data.data[0]);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="media-studies-article">
      <Link to={`/comment/${contentId}`} target="_blank" >
        <img src={tmdbBaseURL + contentData.TMDBImg} alt="" className="js-review-click" datareviewid="${reviews[i].id}"/>
      </Link>
      <Link to={`/comment/${contentId}`} target="_blank" className="media-studies-article-title js-review-click" datareviewid="${reviews[i].id}">
        <p>劇評｜{contentData.title}</p>
      </Link>
      <Outlet />
      <p className="media-studies-article-text">
        {contentData.content}
      </p>
    </div>
  )
}

export default ReviewsPic;