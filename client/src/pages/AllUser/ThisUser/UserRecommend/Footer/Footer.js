import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-content">
            <div className="footer-about">
                <p>關於我們</p>
            </div>
            <div className="footer-pic">
                    <img src="https://picsum.photos/500/500" alt=""/>
                    <img src="https://picsum.photos/500/500" alt=""/>
                    <img src="https://picsum.photos/500/500" alt=""/>
            </div>
        </div>
        <div className="footer-check"> 
            <p>SNSで最新情報をチェック!</p>
        </div>
        <div className="footer-introduce">
          <p>～電影、電視劇推薦～</p>
          <p>在戲劇的世界裡，總有些精彩的瞬間</p>
          <p>這裡的一切富含個人詮釋，如有錯，歡迎指正</p>
          <p>如果悅，歡迎按👍</p>
        </div>
      </div>
      <div className="footer-copyright">
          Copyright© Crab1996 All Rights Reserved.
      </div>
    </div>
  )
}


export default Footer;

