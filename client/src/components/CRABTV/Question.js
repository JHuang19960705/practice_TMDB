import React from 'react'

export default function Question() {
  return (
    <div class="asked-questions-wrap">
      <div class="asked-questions">
        <div class="asked-questions-title"><p>常見問題清單</p></div>
        <div class="asked-questions-list-wrap">
            <div class="asked-questions1 js-asked-questions">
                <div class="asked-questions-list-title"><p>什麼是「CRABTV」</p></div>
                <div class="asked-questions-list-content">
                  <p>線上觀賞迪士尼 (Disney)、皮克斯 (Pixar)、漫威 (Marvel)、星際大戰 (Star Wars)、國家地理 (National Geographic) 和 Star 的精彩串流內容，盡在 Disney+。從最新發行到您最愛的經典故事和獨家原創作品，適合所有人觀賞，而且全無廣告。</p>
                </div>
            </div>
            <div class="asked-questions2 js-asked-questions">
                <div class="asked-questions-list-title"><p>我可以在 CRABTV 上觀看什麼內容？</p></div>
                <ul class="asked-questions-list-content">
                    <li>最新發行和永恆經典作品</li>
                    <li>獨家全新原創電影和影集</li>
                    <li>精彩特輯和限時串流播放活動</li>
                    <li>懷舊重溫系列和您最愛節目的前幾季</li>
                    <li>完整的星際大戰系列和漫威電影宇宙的多數內容</li>
                    <li>備受喜愛的實驗短片</li>
                    <li>紀錄片、實境影集等精彩內容</li>
                    <li>從動漫、韓劇、陸劇到本土製作，涵蓋亞太地區的豐富影視內容。</li>
                </ul>
            </div>
            <div class="asked-questions3 js-asked-questions">
                <div class="asked-questions-list-title"><p>我可以在哪裡觀看 CRABTV？</p></div>
                <div class="asked-questions-list-content"><p>您可透過行動裝置、網路瀏覽器、遊戲主機、機上盒和智慧型電視使用 CRABTV 應用程式。若想查看支援裝置的完整清單, 請點擊此處。</p></div>
            </div>
            <div class="asked-questions4 js-asked-questions">
                <div class="asked-questions-list-title"><p>CRABTV 的費用是多少？</p></div>
                <div class="asked-questions-list-content"><p>以每月新台幣 270 元或每年新台幣 2790 元的價格，盡情享受 CRABTV 的無限娛樂內容。</p></div>
            </div>
            <div class="asked-questions5 js-asked-questions">
                <div class="asked-questions-list-title"><p>CRABTV 包含什麼服務內容？</p></div>
                <div class="asked-questions-list-content">
                    <p>只要訂閱 CRABTV，您將獲得：</p>
                    <ul>
                        <li>最多可在 10 台裝置上任您下載</li>
                        <li>觀賞 300 多部 4K 超高畫質和 HDR 影片</li>
                        <li>可在四個螢幕上同時觀看</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- 輸入資料  --> */}
        <div class="onboarding-wrap">
          <div class="onboarding">

              <div class="onboarding-title">
                  <p>註冊</p>
                  <p>寄送驗證碼至</p>
              </div>
              
              <input type="email" placeholder="電子郵件地址"/>

              <div class="onboarding-news">
                  <input type="checkbox"/>
                  <p>
                      是的！我希望收到 Disney+ 和 Walt Disney 集團提供的更新、特別優惠和其他資訊。
                  </p>
              </div>

              <button>繼續</button>

              <div class="onboarding-sign-up">
                  <div class="onboarding-sign-upTitle"><p>或以其他方式快速註冊</p></div>
                  <div class="onboarding-sign-upPic">
                      <div class="onboarding-sign-upPic1"><img src="/img/appleIcon.png" alt=""/></div>
                      <div class="onboarding-sign-upPic2"><img src="/img/fbIcon.png" alt=""/></div>
                      <div class="onboarding-sign-upPic3"><img src="/img/googleIcon.png" alt=""/></div>
                  </div>    
                  <div class="onboarding-sign-up-other">
                      <button>方案介紹</button>
                      <button>登入</button>
                  </div>
              </div>

              <div class="onboarding-sign-up-detail">
                  <p>迪士尼 (Disney) 將使用您的資料提供個人化與改善您的 Disney+ 體驗，並向您寄送 Disney+ 相關資訊。您可以隨時變更您的通訊喜好。我們可能會根據</p>             
                  <button  type="button" >隱私權政策</button>
                  <div>和</div>
                  <button type="button" >補充隱私權政策</button>
                  <div >使用您的資料，包括與 Walt Disney 集團分享。點擊「同意並繼續」，即表示您同意</div>
                  <button type="button" >訂閱協議</button>
                  <div >、</div>
                  <button type="button" >隱私權政策</button>
                  <div >以及</div>
                  <button type="button">補充隱私權政策</button>
                  <div >。</div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}
