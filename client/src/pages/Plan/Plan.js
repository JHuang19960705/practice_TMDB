import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default function Plan({currentUser, setCurrentUser}) {
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {

  }, [])
  const handleQuestion = () => {

  }
  const handlePlanChanging = async (e) => {
    try{  
      let newRole = e.target.dataset.role;
      let response = await AuthService.patchRole(currentUser.user._id, newRole)
      window.alert("身分修改成功。您現在將被導向到個人資料頁面");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/profile");
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  return (
    <div className="plans-and-pricing-wrap">
      <div className="plans-and-pricing">
          <div className="plans-and-pricing-title"><p>選擇最適合您的方案</p></div>
          <div className="plans-and-pricing-content">
              <div className="plans-and-pricing-plan1 js-plans">
                  <div><p>免費試用1個月</p></div>
                  <ul>
                      <li>上萬小時影片無限觀看</li>
                      <li>上萬首音樂無限聆聽</li>
                  </ul>
                  <button onClick={handlePlanChanging} data-role="free" className='btn btn-primary'>立即選購</button>
              </div>
              <div className="plans-and-pricing-plan2 js-plans">
                  <div><p>月租199$</p></div>
                  <ul>
                      <li>上萬小時影片無限觀看</li>
                      <li>上萬首音樂無限聆聽</li>
                      <li>電影票購票優惠99元起</li>
                      <li>會員限定活動</li>
                      <li>電影獨家特點</li>
                  </ul>
                  <button onClick={handlePlanChanging} data-role="standard" className='btn btn-primary'>立即選購</button>
              </div>
              <div className="plans-and-pricing-plan3 js-plans">
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
                  <button onClick={handlePlanChanging} data-role="premium" className='btn btn-primary'>立即選購</button>
              </div>
          </div>
          <div className="plans-pricing-arrow">
              <span className="plans-pricing-prev js-plans-pricing-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
              <span className="plans-pricing-next js-plans-pricing-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
          </div>
      </div>
      <div className='d-flex justify-content-center' style={ {margin:"100px"}}>
        <button onClick={handleQuestion} className='btn btn-primary'>
          常見問題
        </button>
      </div>
    </div>
  )
}
