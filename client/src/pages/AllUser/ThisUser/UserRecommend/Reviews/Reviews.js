import React from "react";
import ReviewsPic from "./ReviewsPic";
import { useNavigate } from "react-router-dom";

function Reviews({ userRecommend }) {
  const navigate = useNavigate();

  return (
    <div>
      { userRecommend && userRecommend.contentId[0] &&
        <div className="media-studies-wrap">
          <div className="media-studies-wrap-left" id="media-studies-wrap-left">
            <div className="media-studies-sticky">
              <div className="media-studies-title">
                <p>影評分析</p>
                <p>將你從導演的催眠術中</p>
                <p>解放出來</p>
              </div>
              <div>
                <div className="media-studies-more" id="media-studies-more">
                  <button onClick={ ()=>{userRecommend && navigate(`/allUser/${userRecommend._id}/userReviews`)}} >
                    <div className="media-studies-link">
                      更多影評
                    </div>
                    <span className="media-studies-link-img">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="media-studies-long">
            <div className="media-studies-wrap-right js-media-studies-wrap">
              {
                userRecommend && 
                userRecommend.contentId.map((id) => {  
                  return <ReviewsPic contentId={id}/>
                })
              }
            </div> 
            <div className="media-studies-controls">
                <span className="js-media-studies-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
                <span className="js-media-studies-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Reviews;