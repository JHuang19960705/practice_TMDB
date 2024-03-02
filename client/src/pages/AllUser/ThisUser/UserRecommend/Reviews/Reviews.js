import React, { useState, useEffect } from "react";
import ReviewsPic from "./ReviewsPic1";
import { useNavigate } from "react-router-dom";

function Reviews({ userRecommend }) {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);  
  useEffect(() => {
    if(userRecommend){setLoading(false);}
  }, [userRecommend])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="media-studies-wrap">
      <div className="media-studies-wrap-left" id="media-studies-wrap-left">
        <div className="media-studies-title">
          <p>影評分析</p>
          <p>將你從導演的催眠術中</p>
          <p>解放出來</p>
        </div>

        <div className="media-studies-sticky">
          <div className="media-studies-txt-wrap" id="media-studies-txt-wrap">
            <p className="media-studies-txt">
              <p>私たちは体内リズムに従って生活しています。</p>
              <p>近年の研究により体内リズムの乱れが</p>
              <p>さまざまな病気を引き起こすことが分かってきました。</p>
              <p>実は光の浴び方は、この体内リズムに大きな影響を及ぼします。</p>
            </p>
            <p className="media-studies-txt2">
              <p>私たちは日常生活で浴びる光の量・質・タイミングを実測し、</p>
              <p>さまざまな健康データとの関連を科学的に分析しています。</p>
            </p>
            <p className="media-studies-txt">
              <p>これまでに多くの研究成果を発表しており、</p>
              <p>このウェブサイトでは私たちが実施する</p>
              <p>世界でも類をみない大規模な疫学研究を紹介します。</p>
            </p>
            <p className="media-studies-txt">
              <p>その他、私が共同研究者として関わる</p>
              <p>面白い研究についても紹介します。</p>
            </p>
          </div>

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
      <div className="media-studies-long">
        <div className="media-studies-wrap-right js-media-studies-wrap">
          {
            userRecommend.contentId && 
            userRecommend.contentId.map((id) => {  
              return <ReviewsPic key={id} contentId={id}/>
            })
          }
        </div> 
        <div className="media-studies-controls">
            <span className="js-media-studies-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
            <span className="js-media-studies-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
        </div>
      </div>
    </div>
  )
}

export default Reviews;