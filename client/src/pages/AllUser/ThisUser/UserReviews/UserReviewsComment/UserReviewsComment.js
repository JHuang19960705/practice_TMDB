import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContentService from "../../../../../services/content.service";
import Loader from "../../../../../components/Loader";
import Overlay from "../../../../../components/Overlay";

export default function UserReviewsComment({ currentUser }) {
  const [contentData, setContentData] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setLoading] = useState(true);
  const { reviewId, userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []); // 初始加載時進行一次

  // 拿取影評內容
  const fetchData = () => {
    if (currentUser?.user?.role === "standard" || currentUser?.user?.role === "premium") {
      ContentService.getReviewByReviewId(reviewId)
        .then((data) => {
          setContentData(data.data[0]);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (currentUser?.user?.role === "free") {
      navigate("/");
    }
  };

  // 提交按讚
  const handleClickLike = async () => {
    try {
      let response = await ContentService.patchLike(reviewId, currentUser.user._id);
      window.alert(response.data.message);
      fetchData();
    } catch (error) {
      if (error.response && error.response.data) {
        window.alert(error.response.data);
      } else {
        window.alert("按讚時發生錯誤。");
      }
    };
  };

  // 監聽輸入框
  const handleChange = (event) => {
    setNewComment(event.target.value); // 監聽輸入框的變化並將其存入狀態
  };

  // 清空輸入框
  const handleCancel = () => {
    setNewComment("");
  };

  // 提交影評
  const handleClickComment = async () => {
    const confirmed = window.confirm("確定送出這則評論嗎?");
    if (!confirmed) return;

    try {
      await ContentService.postComment(reviewId, currentUser.user._id, newComment);
      window.alert("評論成功");
      fetchData();
      setNewComment(""); // 清空輸入框
    } catch (error) {
      if (error.response && error.response.data) {
        window.alert(error.response.data);
      } else {
        window.alert("評論時發生錯誤。");
      }
    };
  };

  return (
    <>
      {isLoading && <Loader />} {/* 如果 loading 為 true，顯示 Loader */}
      {isLoading && <Overlay />} {/* 如果 loading 為 true，顯示 Overlay */}
      <div className="movie-comment-system">
        <button onClick={() => navigate(`/allUser/${userId}/userReviews`)} className="absolute right-4 top-4 px-3 py-1 bg-gray-100 rounded-md dark:text-black">返回</button>
        <div className="movie-user">
          {/* <!-- 左半邊 --> */}
          <div className="movie-user-left">
            <div className="movie-user-left-sticky">
              {/* <!-- XX影片的評論 --> */}
              <div className="movie-user-thought">
                {contentData && (
                  <div className="movie-user-thought-title">
                    <p>『{contentData.TMDBId}』に</p>
                    <p>投稿された感想・評価</p>
                  </div>
                )}
                <div className="movie-user-thought-title-trangle"></div>
              </div>
              {/* <!-- 評論人的頭像、符號、標題 --> */}
              <div className="movie-user-title">
                {/* 頭像 */}
                <div className="movie-user-title-pic">
                  <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=512&amp;version=1582611188&amp;width=512" alt="" />
                  {/* <!-- 使用者名稱 --> */}
                  {contentData && (
                    <div className="movie-user-name">
                      {contentData.writer.username}
                    </div>
                  )}
                </div>
                {/* 符號 */}
                <div className="movie-user-title-line">
                  <div className="movie-user-title-line-one"></div>
                  <div className="movie-user-title-line-two"></div>
                </div>
                {/* 標題 */}
                {contentData && (
                  <div className="movie-user-title-word">
                    <p>{contentData.title}</p>
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
              {contentData && (
                <p>{contentData.content}</p>
              )}
              {/* <!-- 喜歡、時間 --> */}
              <div className="movie-user-like-time">
                <div onClick={handleClickLike} className="movie-user-like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e478a"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="movie-user-like-svg"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    ></path>
                  </svg>
                  <div>{contentData && contentData.like.length} 個讚</div>
                </div>
                {contentData && (
                  <div className="movie-user-detail">
                    <div className="movie-user-detail-date">
                      {contentData.date.slice(0, 10)}
                    </div>
                    <div className="movie-user-detail-time">
                      {contentData.date.slice(11, 16)}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* 留言 */}
            <div className="movie-user-comment-quantity">{contentData && contentData.commenters.length} 則留言 </div>
            {/* <!-- 待輸入的評論 --> */}
            <div className="movie-user-new-comment">
              {/* <!-- 自己的頭像 --> */}
              <div className="movie-user-new-comment-pic">
                <img src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" />
              </div>
              {/* <!-- 自己的評論輸入 --> */}
              <div className="movie-user-new-comment-content">
                {/* <!-- 輸入 --> */}
                <input
                  type="text"
                  placeholder="發表留言..."
                  value={newComment}
                  onChange={handleChange}
                />
                {/* <!-- 取消、留言 --> */}
                <div className="movie-user-new-comment-content-button">
                  <div className="movie-user-new-comment-content-button-cm">
                    <button onClick={handleCancel} className={`movie-user-new-comment-content-button-cm-cancel ${newComment ? "button-active" : ""}`} >
                      取消
                    </button>
                    <button onClick={handleClickComment} className={`movie-user-new-comment-content-button-cm-message ${newComment ? "button-active" : ""}`}>
                      留言
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 他人的評論 --> */}
            {contentData && contentData.commenters.length > 0 && contentData.commenters.map((commenter) => {
              return (
                <div className="movie-user-right-other">
                  <div className="movie-user-right-other-comment-pic">
                    <img src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <div className="movie-user-right-other-detail">
                    <div className="movie-user-right-other-detail-user">
                      <div className="movie-user-right-other-detail-user-name">
                        <p>@{commenter._id}</p>
                      </div>
                      <div className="movie-user-right-other-detail-date">
                        <p>{commenter.date.slice(0, 10)}</p>
                      </div>
                    </div>
                    <div className="movie-user-right-other-detail-user-comment">
                      <p>{commenter.content}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
