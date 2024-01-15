import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentService from "../../services/content.service";

export default function CommentPage({ currentUser, setCurrentUser }) {
  const [contentData, setContentData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
      if (currentUser.user.role ==  "standard" || currentUser.user.role ==  "premium") {
        ContentService.get(_id)
          .then((data) => {
            setContentData(data.data);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "free") {
        ContentService.getEnrolledContents(_id)
          .then((data) => {
            console.log(data);
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

  let last = contentData.length - 1;

  return (
    <div class="movie--comment-system">
      <div class="movie-user">
        {/* <!-- 左半邊 --> */}
        <div class="movie-user-left">
          {/* <!-- 影片的評論 --> */}
          <div class="movie-user-thought">
            {contentData[last] && (
              <div class="movie-user-thought-title">
                  <p>『{contentData[last].TMDBId}』に</p>
                  <p>投稿された感想・評価</p>
              </div>
            )}
              <div class="movie-user-thought-title-trangle"></div>
          </div>
          {/* <!-- 評論人的頭像、心得標題 --> */}
          <div class="movie-user-title">
              <div class="movie-user-title-pic">
                  <img src="/img/Behind/E1N886PVoAsnnde.jpg" alt=""/>
              </div>
              <div class="movie-user-title-line">
                  <div class="movie-user-title-line-one"></div>
                  <div class="movie-user-title-line-two"></div>
              </div>
              {contentData[last] && (
                <div class="movie-user-title-word">
                  <p>{contentData[last].title}</p>
                </div>
              )}              
          </div>
          {/* <!-- 使用者名稱 --> */}
          {contentData[last] && (
            <div class="movie-user-name">
                <p>{contentData[last].writer.username}</p>
            </div>
          )}            
          {/* <!-- 星星評分 --> */}
          <div class="movie-user-star">
              <div class="movie-user-star-pic">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
              </div>
              <div class="movie-user-star-score">
                  <p>4.5</p>
              </div>

          </div>
          {/* <!-- 評論時間 --> */}
          {contentData[last] && (
            <div class="movie-user-detail">
                <div class="movie-user-detail-device">
                    <p>iPhoneアプリから投稿</p>
                </div>
                <div class="movie-user-detail-date">
                    <p>{contentData[last].date.slice(0, 10)}</p>
                </div>
                <div class="movie-user-detail-time">
                    <p>{contentData[last].date.slice(11, 16)}</p>
                </div>
            </div>
          )}
          {/* <!-- 待輸入的評論 --> */}
          <div class="movie-user-new-comment">
              {/* <!-- 自己的頭像 --> */}
              <div class="movie-user-new-comment-pic">
                  <img src="/img/Behind/E1N886PVoAsnnde.jpg" alt=""/>
              </div>
              {/* <!-- 自己的評論輸入 --> */}
              <div class="movie-user-new-comment-content">
                  {/* <!-- 輸入 --> */}
                  <input type="text" value=""/>
                  {/* <!-- 表情、取消、留言 --> */}
                  <div class="movie-user-new-comment-content-button">
                      <div class="movie-user-new-comment-content-button-emoji">
                          <i class="fa-regular fa-face-smile"></i>
                      </div>
                      <div class="movie-user-new-comment-content-button-cm">
                          <div class="movie-user-new-comment-content-button-cm-cancel">
                              <button> 取消 </button>
                          </div>
                          <div class="movie-user-new-comment-content-button-cm-message">
                              <button> 留言 </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>   
        {/* <!-- 右半邊 --> */}
        <div class="movie-user-right">
          <div class="movie-user-right-content">
            {contentData[last] && (
              <p>{contentData[last].content}</p>
            )}  
          </div>
          <div class="movie-user-right-more">
              <p>続きを読む</p>
          </div>
          <div class="movie-user-right-interactive">
              <div class="movie-user-right-interactive-like">
                  <i class="fa-solid fa-thumbs-up"></i>
                  <p class="movie-user-right-interactive-like-number">32</p>
              </div>
              <div class="movie-user-right-interactive-comment">
                  <i class="fa-regular fa-message"></i>
                  <p class="movie-user-right-interactive-comment-number">6</p>
              </div>
              <div class="movie-user-right-interactive-mark">
                  <i class="fa-solid fa-bookmark"></i>
              </div>
              <div class="movie-user-right-interactive-share">
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
              <div class="movie-user-right-interactive-ellipsis">
                  <i class="fa-solid fa-ellipsis"></i>
              </div>
          </div>
          {/* <!-- 他人的評論 --> */}
          <div class="movie-user-right-other">
            <div class="movie-user-right-other-comment">
              <div class="movie-user-right-other-comment-pic">
                  <img src="img/Behind/E3CN_2OUYBAXtjp.jpg" alt=""/>
              </div>
              <div class="movie-user-right-other-detail">
                  <div class="movie-user-right-other-detail-user">
                      <div class="movie-user-right-other-detail-user-name">
                          <p>${}</p>
                      </div>
                      <div class="movie-user-right-other-detail-user-comment">
                          <p></p>
                      </div>
                  </div>
                  <div class="movie-user-right-other-detail-data">
                      <div class="movie-user-right-other-detail-data-self">
                          <div class="movie-user-right-other-detail-data-self-place">
                              <p>B1</p>
                          </div>
                          <div class="movie-user-right-other-detail-data-self-date">
                              <p>2022年9月20日</p>
                          </div>
                          <div class="movie-user-right-other-detail-data-self-device">
                              <p>PCから投稿</p>
                          </div>
                      </div>
                      <div class="movie-user-right-other-detail-data-interactive">
                          <div class="movie-user-right-other-detail-data-interactive-like">
                              <i class="fa-solid fa-thumbs-up"></i>
                          </div>
                          <div class="movie-user-right-other-detail-data-interactive-comment">
                              <i class="fa-regular fa-message"></i>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="movie-user-right-other-comment">
              <div class="movie-user-right-other-comment-pic">
                  <img src="img/Behind/E3CN_2OUYBAXtjp.jpg" alt=""/>
              </div>
              <div class="movie-user-right-other-detail">
                  <div class="movie-user-right-other-detail-user">
                      <div class="movie-user-right-other-detail-user-name">
                          <p>${}</p>
                      </div>
                      <div class="movie-user-right-other-detail-user-comment">
                          <p>感情移入できませんでした。</p>
                      </div>
                  </div>
                  <div class="movie-user-right-other-detail-data">
                      <div class="movie-user-right-other-detail-data-self">
                          <div class="movie-user-right-other-detail-data-self-place">
                              <p>B1</p>
                          </div>
                          <div class="movie-user-right-other-detail-data-self-date">
                              <p>2022年9月20日</p>
                          </div>
                          <div class="movie-user-right-other-detail-data-self-device">
                              <p>PCから投稿</p>
                          </div>
                      </div>
                      <div class="movie-user-right-other-detail-data-interactive">
                          <div class="movie-user-right-other-detail-data-interactive-like">
                              <i class="fa-solid fa-thumbs-up"></i>
                          </div>
                          <div class="movie-user-right-other-detail-data-interactive-comment">
                              <i class="fa-regular fa-message"></i>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="movie-user-right-other-comment">
              <div class="movie-user-right-other-comment-pic">
                  <img src="img/Behind/E3CN_2OUYBAXtjp.jpg" alt=""/>
              </div>
              <div class="movie-user-right-other-detail">
                  <div class="movie-user-right-other-detail-user">
                      <div class="movie-user-right-other-detail-user-name">
                          <p>${}</p>
                      </div>
                      <div class="movie-user-right-other-detail-user-comment">
                          <p>感情移入できませんでした。</p>
                      </div>
                  </div>
                  <div class="movie-user-right-other-detail-data">
                      <div class="movie-user-right-other-detail-data-self">
                          <div class="movie-user-right-other-detail-dataSelf-place">
                              <p>B1</p>
                          </div>
                          <div class="movie-user-right-other-detail-data-self-date">
                              <p>2022年9月20日</p>
                          </div>
                          <div class="movie-user-right-other-detail-data-self-device">
                              <p>PCから投稿</p>
                          </div>
                      </div>
                      <div class="movie-user-right-other-detail-data-interactive">
                          <div class="movie-user-right-other-detail-data-interactive-like">
                              <i class="fa-solid fa-thumbs-up"></i>
                          </div>
                          <div class="movie-user-right-other-detail-data-interactive-comment">
                              <i class="fa-regular fa-message"></i>
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
