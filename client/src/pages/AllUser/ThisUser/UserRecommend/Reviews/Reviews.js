import React from "react";
import ReviewsPic from "./ReviewsPic";
import { useNavigate } from "react-router-dom";

export default function Reviews({ userRecommend }) {
  const navigate = useNavigate();

  return (
    <>
      {userRecommend && userRecommend.contentId && userRecommend.contentId.length > 0 &&
        <div className="media-studies-wrap">
          <div className="media-studies-wrap-left" id="media-studies-wrap-left">
            <div className="media-studies-sticky">
              <div className="media-studies-title">
                <p>影評分析</p>
                <p>將你從導演的催眠術中</p>
                <p>解放出來</p>
              </div>
              <div>
                <button className="media-studies-more" id="media-studies-more" onClick={() => { userRecommend._id && navigate(`/allUser/${userRecommend._id}/userReviews`) }} >
                  <div className="media-studies-link">
                    更多影評
                  </div>
                  <div className="media-studies-link-img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                      <circle cx="12" cy="12" r="11" fill="white" stroke="black" stroke-width="2" />
                      <path d="M10 7l5 5-5 5" fill="none" stroke="black" stroke-width="2" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="media-studies-long">
            <div className="media-studies-wrap-right js-media-studies-wrap">
              {
                userRecommend.contentId.map((id) => {
                  return <ReviewsPic reviewId={id} />
                })
              }
            </div>
            <div className="media-studies-controls">
              <span className="js-media-studies-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png" /></span>
              <span className="js-media-studies-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png" /></span>
            </div>
          </div>
        </div>
      }
    </>
  );
}