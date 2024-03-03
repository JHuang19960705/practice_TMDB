import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContentService from "../../../../services/content.service";

export default function YourReviewsComment({ currentUser, setCurrentUser }) {
  const [contentData, setContentData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { contentId } = useParams();
  useEffect(() => {
    if (currentUser) {
      if (currentUser.user.role ==  "standard" || currentUser.user.role ==  "premium") {
        ContentService.getContentByContentId(contentId)
          .then((data) => {
            setContentData(data.data[0]);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "free") {
        navigate("*")
      }
    }
  }, []);

  if (isLoading) {
    return <div className="App"></div>;
  }

  return (
    <div className="movie-comment-system">
        <button onClick={()=>navigate(`/back/yourReviews/${contentId}`)} className="btn btn-light">返回</button>
        <div className="movie-user">
            {/* <!-- 左半邊 --> */}
            <div className="movie-user-left">
            {/* <!-- 影片的評論 --> */}
            <div className="movie-user-thought">
                {contentData && (
                <div className="movie-user-thought-title">
                    <p>『{contentData.TMDBId}』に</p>
                    <p>投稿された感想・評価</p>
                </div>
                )}
                <div className="movie-user-thought-title-trangle"></div>
            </div>
            {/* <!-- 評論人的頭像、心得標題 --> */}
            <div className="movie-user-title">
                <div className="movie-user-title-pic">
                    <img src="/img/Behind/E1N886PVoAsnnde.jpg" alt=""/>
                </div>
                <div className="movie-user-title-line">
                    <div className="movie-user-title-line-one"></div>
                    <div className="movie-user-title-line-two"></div>
                </div>
                {contentData && (
                    <div className="movie-user-title-word">
                    <p>{contentData.title}</p>
                    </div>
                )}              
            </div>
            {/* <!-- 使用者名稱 --> */}
            {contentData && (
                <div className="movie-user-name">
                    <p>{contentData.writer.username}</p>
                </div>
            )}            
            {/* <!-- 星星評分 --> */}
            <div className="movie-user-star">
                <div className="movie-user-star-pic">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="movie-user-star-score">
                    <p>4.5</p>
                </div>

            </div>
            {/* <!-- 評論時間 --> */}
            {contentData && (
                <div className="movie-user-detail">
                    <div className="movie-user-detail-device">
                        <p>iPhoneアプリから投稿</p>
                    </div>
                    <div className="movie-user-detail-date">
                        <p>{contentData.date.slice(0, 10)}</p>
                    </div>
                    <div className="movie-user-detail-time">
                        <p>{contentData.date.slice(11, 16)}</p>
                    </div>
                </div>
            )}
            {/* <!-- 待輸入的評論 --> */}
            <div className="movie-user-new-comment">
                {/* <!-- 自己的頭像 --> */}
                <div className="movie-user-new-comment-pic">
                    <img src="/img/Behind/E1N886PVoAsnnde.jpg" alt=""/>
                </div>
                {/* <!-- 自己的評論輸入 --> */}
                <div className="movie-user-new-comment-content">
                    {/* <!-- 輸入 --> */}
                    <input type="text" value=""/>
                    {/* <!-- 表情、取消、留言 --> */}
                    <div className="movie-user-new-comment-content-button">
                        <div className="movie-user-new-comment-content-button-emoji">
                            <i className="fa-regular fa-face-smile"></i>
                        </div>
                        <div className="movie-user-new-comment-content-button-cm">
                            <div className="movie-user-new-comment-content-button-cm-cancel">
                                <button> 取消 </button>
                            </div>
                            <div className="movie-user-new-comment-content-button-cm-message">
                                <button> 留言 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>   
            {/* <!-- 右半邊 --> */}
            <div className="movie-user-right">
            <div className="movie-user-right-content">
                {contentData && (
                <p>{contentData.content}</p>
                )}  
            </div>
            <div className="movie-user-right-more">
                <p>続きを読む</p>
            </div>
            <div className="movie-user-right-interactive">
                <div className="movie-user-right-interactive-like">
                    <i className="fa-solid fa-thumbs-up"></i>
                    <p className="movie-user-right-interactive-like-number">32</p>
                </div>
                <div className="movie-user-right-interactive-comment">
                    <i className="fa-regular fa-message"></i>
                    <p className="movie-user-right-interactive-comment-number">6</p>
                </div>
                <div className="movie-user-right-interactive-mark">
                    <i className="fa-solid fa-bookmark"></i>
                </div>
                <div className="movie-user-right-interactive-share">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                <div className="movie-user-right-interactive-ellipsis">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            {/* <!-- 他人的評論 --> */}
            <div className="movie-user-right-other">
                <div className="movie-user-right-other-comment">
                <div className="movie-user-right-other-comment-pic">
                    <img src="img/Behind/E3CN_2OUYBAXtjp.jpg" alt=""/>
                </div>
                <div className="movie-user-right-other-detail">
                    <div className="movie-user-right-other-detail-user">
                        <div className="movie-user-right-other-detail-user-name">
                            <p>${}</p>
                        </div>
                        <div className="movie-user-right-other-detail-user-comment">
                            <p></p>
                        </div>
                    </div>
                    <div className="movie-user-right-other-detail-data">
                        <div className="movie-user-right-other-detail-data-self">
                            <div className="movie-user-right-other-detail-data-self-place">
                                <p>B1</p>
                            </div>
                            <div className="movie-user-right-other-detail-data-self-date">
                                <p>2022年9月20日</p>
                            </div>
                            <div className="movie-user-right-other-detail-data-self-device">
                                <p>PCから投稿</p>
                            </div>
                        </div>
                        <div className="movie-user-right-other-detail-data-interactive">
                            <div className="movie-user-right-other-detail-data-interactive-like">
                                <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div className="movie-user-right-other-detail-data-interactive-comment">
                                <i className="fa-regular fa-message"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="movie-user-right-other-comment">
                <div className="movie-user-right-other-comment-pic">
                    <img src="img/Behind/E3CN_2OUYBAXtjp.jpg" alt=""/>
                </div>
                <div className="movie-user-right-other-detail">
                    <div className="movie-user-right-other-detail-user">
                        <div className="movie-user-right-other-detail-user-name">
                            <p>${}</p>
                        </div>
                        <div className="movie-user-right-other-detail-user-comment">
                            <p>感情移入できませんでした。</p>
                        </div>
                    </div>
                    <div className="movie-user-right-other-detail-data">
                        <div className="movie-user-right-other-detail-data-self">
                            <div className="movie-user-right-other-detail-data-self-place">
                                <p>B1</p>
                            </div>
                            <div className="movie-user-right-other-detail-data-self-date">
                                <p>2022年9月20日</p>
                            </div>
                            <div className="movie-user-right-other-detail-data-self-device">
                                <p>PCから投稿</p>
                            </div>
                        </div>
                        <div className="movie-user-right-other-detail-data-interactive">
                            <div className="movie-user-right-other-detail-data-interactive-like">
                                <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div className="movie-user-right-other-detail-data-interactive-comment">
                                <i className="fa-regular fa-message"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="movie-user-right-other-comment">
                <div className="movie-user-right-other-comment-pic">
                    <img src="img/Behind/E3CN_2OUYBAXtjp.jpg" alt=""/>
                </div>
                <div className="movie-user-right-other-detail">
                    <div className="movie-user-right-other-detail-user">
                        <div className="movie-user-right-other-detail-user-name">
                            <p>${}</p>
                        </div>
                        <div className="movie-user-right-other-detail-user-comment">
                            <p>感情移入できませんでした。</p>
                        </div>
                    </div>
                    <div className="movie-user-right-other-detail-data">
                        <div className="movie-user-right-other-detail-data-self">
                            <div className="movie-user-right-other-detail-dataSelf-place">
                                <p>B1</p>
                            </div>
                            <div className="movie-user-right-other-detail-data-self-date">
                                <p>2022年9月20日</p>
                            </div>
                            <div className="movie-user-right-other-detail-data-self-device">
                                <p>PCから投稿</p>
                            </div>
                        </div>
                        <div className="movie-user-right-other-detail-data-interactive">
                            <div className="movie-user-right-other-detail-data-interactive-like">
                                <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div className="movie-user-right-other-detail-data-interactive-comment">
                                <i className="fa-regular fa-message"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
