import React from 'react'

export default function Comment() {
  return (
    <div class="movie--comment-system">
      <div class="movie-user">
        {/* <!-- 左半邊 --> */}
        <div class="movie-user-left">
          {/* <!-- 影片的評論 --> */}
          <div class="movie-user-thought">
              <div class="movie-user-thought-title">
                  <p>『${product.name}』に</p>
                  <p>投稿された感想・評価</p>
              </div>
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
              <div class="movie-user-title-word">
                  <p>${product.comment[0].commentTitle}</p>
              </div>
          </div>
          {/* <!-- 使用者名稱 --> */}
          <div class="movie-user-name">
              <p>${product.comment[0].commentUserName}</p>
          </div>
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
          <div class="movie-user-detail">
              <div class="movie-user-detail-device">
                  <p>iPhoneアプリから投稿</p>
              </div>
              <div class="movie-user-detail-date">
                  <p>2023年7月1日</p>
              </div>
              <div class="movie-user-detail-time">
                  <p>18:04</p>
              </div>
          </div>
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
            <p>
                毎回のコントのつまらなさ、クスリとも笑えなかった。つまらな過ぎて可哀想になるくらい。10年間売れることがなかったんだから、コントが面白かったらドラマとして成立しないのはよくわかるんだけど、こんなつまらないコントを面白いと思ってのめり込んで人生まで重ねて沢山涙した中浜さんの思いに全く共感出来なかったんだよね。地味だけど、もう少し通好みでじわじわくるようなコントだったら、またドラマ全体のクオリティが違ってきたと思う。あと、723のクダリとか、内輪受けしてみんなで爆笑してるシーン沢山あったけど、シラーっと冷めてしまったのは、脚本のせいかな。会話劇、関係ないけど、坂元さんの脚本がいかに凄いのかを思い知らされた。
                最初メインキャスト5人が並んでいる番宣観た時、めちゃくちゃ興奮したことを思い出す。この演技力達者な俳優陣で、面白くないはずがない！と思って過剰に期待してしまったんだと思う。
            </p>
            <p>
                毎回のコントのつまらなさ、クスリとも笑えなかった。つまらな過ぎて可哀想になるくらい。10年間売れることがなかったんだから、コントが面白かったらドラマとして成立しないのはよくわかるんだけど、こんなつまらないコントを面白いと思ってのめり込んで人生まで重ねて沢山涙した中浜さんの思いに全く共感出来なかったんだよね。地味だけど、もう少し通好みでじわじわくるようなコントだったら、またドラマ全体のクオリティが違ってきたと思う。あと、723のクダリとか、内輪受けしてみんなで爆笑してるシーン沢山あったけど、シラーっと冷めてしまったのは、脚本のせいかな。会話劇、関係ないけど、坂元さんの脚本がいかに凄いのかを思い知らされた。
                最初メインキャスト5人が並んでいる番宣観た時、めちゃくちゃ興奮したことを思い出す。この演技力達者な俳優陣で、面白くないはずがない！と思って過剰に期待してしまったんだと思う。
            </p>
            <p>
                毎回のコントのつまらなさ、クスリとも笑えなかった。つまらな過ぎて可哀想になるくらい。10年間売れることがなかったんだから、コントが面白かったらドラマとして成立しないのはよくわかるんだけど、こんなつまらないコントを面白いと思ってのめり込んで人生まで重ねて沢山涙した中浜さんの思いに全く共感出来なかったんだよね。地味だけど、もう少し通好みでじわじわくるようなコントだったら、またドラマ全体のクオリティが違ってきたと思う。あと、723のクダリとか、内輪受けしてみんなで爆笑してるシーン沢山あったけど、シラーっと冷めてしまったのは、脚本のせいかな。会話劇、関係ないけど、坂元さんの脚本がいかに凄いのかを思い知らされた。
                最初メインキャスト5人が並んでいる番宣観た時、めちゃくちゃ興奮したことを思い出す。この演技力達者な俳優陣で、面白くないはずがない！と思って過剰に期待してしまったんだと思う。
            </p>
            <p>
                毎回のコントのつまらなさ、クスリとも笑えなかった。つまらな過ぎて可哀想になるくらい。10年間売れることがなかったんだから、コントが面白かったらドラマとして成立しないのはよくわかるんだけど、こんなつまらないコントを面白いと思ってのめり込んで人生まで重ねて沢山涙した中浜さんの思いに全く共感出来なかったんだよね。地味だけど、もう少し通好みでじわじわくるようなコントだったら、またドラマ全体のクオリティが違ってきたと思う。あと、723のクダリとか、内輪受けしてみんなで爆笑してるシーン沢山あったけど、シラーっと冷めてしまったのは、脚本のせいかな。会話劇、関係ないけど、坂元さんの脚本がいかに凄いのかを思い知らされた。
                最初メインキャスト5人が並んでいる番宣観た時、めちゃくちゃ興奮したことを思い出す。この演技力達者な俳優陣で、面白くないはずがない！と思って過剰に期待してしまったんだと思う。
            </p>
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
                          <p>${product.comment[0].otherUser[0]}</p>
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
                          <p>${product.comment[0].otherUser[1]}</p>
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
                          <p>${product.comment[0].otherUser[2]}</p>
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
