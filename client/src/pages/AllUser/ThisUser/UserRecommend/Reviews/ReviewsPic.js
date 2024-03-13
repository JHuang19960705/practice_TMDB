import React, { useState, useEffect } from "react";
import ContentService from "../../../../../services/content.service";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function ReviewsPic({ contentId }) {
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
      {contentData && 
        <div>
          <button>
            <img src={tmdbBaseURL + contentData.TMDBImg} alt="" className="js-review-click" datareviewid="${reviews[i].id}"/>
          </button>
          <button className="media-studies-article-title js-review-click" datareviewid="${reviews[i].id}">
            <p>影評｜{contentData.title}</p>
          </button>
          <p className="media-studies-article-text">
            {contentData.content}
          </p>
        </div>
      }
    </div>

  )
}

export default ReviewsPic;