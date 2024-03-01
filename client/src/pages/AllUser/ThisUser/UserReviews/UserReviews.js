import React, { useEffect, useState } from 'react'
import contentService from '../../../../services/content.service';
import { useParams } from 'react-router-dom';


export default function UserReviews() {
  const {userId} = useParams()
  const [contentData, setContentData] = useState(null);
  useEffect(() => {
    contentService.get(userId)
      .then((data) => {
        setContentData(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden h-50">
      {contentData && contentData.map((content)=>{
        return(
          <div className="card" style={{ width: "18rem", margin: "1rem" }}>
          <div className="card-body">
            <div>
              <h5 className="card-title">文章題目:{content.title}</h5>
            </div>
            <textarea style={{ margin: "1rem 0rem", height:"100px"}} className="card-text">
              {content.content}
            </textarea>
            <p style={{ margin: "0.5rem 0rem" }}>
              回應人數: {content.commenters.length}
            </p>
            <p style={{ margin: "0.5rem 0rem" }}>
              TAG: {content.tags}
            </p>
          </div>
        </div>
        )
      })}
    </div>
  )
}
