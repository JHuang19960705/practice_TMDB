import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContentService from "../../../../services/content.service";
import Loader from "../../../../components/Loader";
import Overlay from "../../../../components/Loader";

export default function YourReviewsComment({ currentUser }) {
  const [reviewData, setReviewData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { reviewId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []); // 初始加載時進行一次

  const fetchData = () => {
    if (currentUser) {
      if (currentUser.user.role == "standard" || currentUser.user.role == "premium") {
        ContentService.getReviewByReviewId(reviewId)
          .then((data) => {
            setReviewData(data.data[0]);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "free") {
        navigate("*")
      }
    }
  };

  return (
    <div className="movie-comment-system">
      {isLoading && <Loader />}
      {isLoading && <Overlay />}
      <button onClick={() => navigate(`/back/yourReviews/${reviewId}`)} className="absolute right-4 top-4 px-3 py-1 bg-gray-100 rounded-md dark:text-black">返回</button>
      <div className="movie-user">
        {/* <!-- 左半邊 --> */}
        <div className="movie-user-left">
          <div className="movie-user-left-sticky">
            {/* <!-- XX影片的評論 --> */}
            <div className="movie-user-thought">
              {reviewData && (
                <div className="movie-user-thought-title">
                  <p>『{reviewData.TMDBId}』に</p>
                  <p>投稿された感想・評価</p>
                </div>
              )}
              <div className="movie-user-thought-title-trangle"></div>
            </div>
            {/* <!-- 評論人的頭像、符號、標題 --> */}
            <div className="movie-user-title">
              {/* 頭像 */}
              <div className="movie-user-title-pic">
                <img src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" />
                {/* <!-- 使用者名稱 --> */}
                {reviewData && (
                  <div className="movie-user-name">
                    {reviewData.writer.username}
                  </div>
                )}
              </div>
              {/* 符號 */}
              <div className="movie-user-title-line">
                <div className="movie-user-title-line-one"></div>
                <div className="movie-user-title-line-two"></div>
              </div>
              {/* 標題 */}
              {reviewData && (
                <div className="movie-user-title-word">
                  <p>{reviewData.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <!-- 右半邊 --> */}
        <div className="movie-user-right">
          {/* 影評內容、時間 */}
          <div className="movie-user-right-content">
            {/* 內容 */}
            {reviewData && (
              <p>{reviewData.content}</p>
            )}
            {/* <!-- 時間 --> */}
            {reviewData && (
              <div className="movie-user-detail">
                <div className="movie-user-detail-date">
                  {reviewData.date.slice(0, 10)}
                </div>
                <div className="movie-user-detail-time">
                  {reviewData.date.slice(11, 16)}
                </div>
              </div>
            )}
          </div>
          {/* <!-- 他人的評論 --> */}
          {/* <div className="movie-user-right-other">
                        <div className="movie-user-right-other-comment">
                            <div className="movie-user-right-other-comment-pic">
                                <img src="img/Behind/E3CN_2OUYBAXtjp.jpg" alt="" />
                            </div>
                            <div className="movie-user-right-other-detail">
                                <div className="movie-user-right-other-detail-user">
                                    <div className="movie-user-right-other-detail-user-name">
                                        <p>${ }</p>
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
                                </div>
                            </div>
                        </div>
                    </div> */}
          {/* <!-- 待輸入的評論 --> */}
          <div className="movie-user-new-comment">
            {/* <!-- 自己的頭像 --> */}
            <div className="movie-user-new-comment-pic">
              <img src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" />
            </div>
            {/* <!-- 自己的評論輸入 --> */}
            <div className="movie-user-new-comment-content">
              {/* <!-- 輸入 --> */}
              <input type="text" placeholder="發表留言..." />
              {/* <!-- 取消、留言 --> */}
              <div className="movie-user-new-comment-content-button">
                <div className="movie-user-new-comment-content-button-cm">
                  <button className="movie-user-new-comment-content-button-cm-cancel">
                    取消
                  </button>
                  <button className="movie-user-new-comment-content-button-cm-message">
                    留言
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
