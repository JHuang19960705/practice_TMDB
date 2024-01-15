import React from 'react'

export default function PlanPrice() {
  return (
    <div class="plans-and-pricing-wrap">
      <div class="plans-and-pricing">
          <div class="plans-and-pricing-title"><p>選擇最適合您的方案</p></div>
          <div class="plans-and-pricing-content">
              <div class="plans-and-pricing-plan1 js-plans">
                  <div><p>免費試用1個月</p></div>
                  <ul>
                      <li>上萬小時影片無限觀看</li>
                      <li>上萬首音樂無限聆聽</li>
                  </ul>
                  <button>立即選購</button>
              </div>
              <div class="plans-and-pricing-plan2 js-plans">
                  <div><p>月租199$</p></div>
                  <ul>
                      <li>上萬小時影片無限觀看</li>
                      <li>上萬首音樂無限聆聽</li>
                      <li>電影票購票優惠99元起</li>
                      <li>會員限定活動</li>
                      <li>電影獨家特點</li>
                  </ul>
                  <button>立即選購</button>
              </div>
              <div class="plans-and-pricing-plan3 js-plans">
                  <div>
                      <p>季租$299</p>
                      <p>每月只要$99</p>
                  </div>
                  <ul>
                      <li>上萬小時影片無限觀看</li>
                      <li>上萬首音樂無限聆聽</li>
                      <li>電影票購票優惠99元起</li>
                      <li>會員限定活動</li>
                      <li>電影獨家特點</li>
                  </ul>
                  <button>立即選購</button>
              </div>
          </div>
          <div class="plans-pricing-arrow">
              <span class="plans-pricing-prev js-plans-pricing-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
              <span class="plans-pricing-next js-plans-pricing-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
          </div>
      </div>
    </div>
  )
}
