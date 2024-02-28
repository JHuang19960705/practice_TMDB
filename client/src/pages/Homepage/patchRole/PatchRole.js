import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

export default function PatchRole({currentUser, setCurrentUser}) {
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handlePlanChanging = async (e) => {
    try{  
      let newRole = e.target.dataset.role;
      let response = await AuthService.patchRole(currentUser.user._id, newRole)
      window.alert("身分修改成功。您現在將被導向到個人資料頁面");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  return (
    <div>
      <div className="flex justify-end items-center mb-1">
        <button onClick={()=>navigate("/")}   type="button" className="m-1 p-2 rounded-lg bg-yellow-200">返回</button>
      </div>
      <div className="flex justify-center">
        <p className="text-3xl">請選擇你的身份</p>
      </div>
      <div className="pricing-container">
        <article className="pricing-card">
          <h3>Free</h3>
          <div>
            Essential features
          </div>
          <div className="pricing-card__price--original">
            <s>$59.99</s>
          </div>
          <div className="pricing-card__price">
            $54.99
          </div>
          <div className="period">
            / month
          </div>
          <ul>
            <li>Basic access to content and resources.</li>
            <li>Email support with a 48-hour response time.</li>
            <li>Access to community forums for peer-to-peer support.</li>
            <li>Monthly newsletter with updates and tips.</li>
            <li>Limited access to standard tools and features.</li>
          </ul>
          <button onClick={handlePlanChanging} data-role="free" className="enroll">
            選擇free方案
          </button>
        </article>
        <article className="pricing-card">
          <h3>Standard</h3>
          <div>
            Advanced features
          </div>
          <div className="pricing-card__price--original">
            <s>$112.00</s>
          </div>
          <div className="pricing-card__price">
            $89.99
          </div>
          <div className="period">
            / month
          </div>
          <ul>
            <li>All features of the Essential Plan.</li>
            <li>Priority email support with a 24-hour response time.</li>
            <li>Access to exclusive webinars and online events.</li>
            <li>Enhanced tools and features, including analytics.</li>
            <li>Customizable content experience based on user preferences. asfsfaafsfsafsafsafsaafsfsafsa</li>
          </ul>
          <button onClick={handlePlanChanging} data-role="standard" className="enroll">
            選擇standard方案
          </button>
        </article>      
        <article className="pricing-card pricing-card--primary">
          <h3>Pro</h3>
          <div>
            Premium features
          </div>
          <div className="pricing-card__price--original">
            <s>$125.00</s>
          </div>
          <div className="pricing-card__price">
            $94.99
          </div>
          <div className="period">
            / month
          </div>
          <ul>
            <li>All features of the Advanced Plan.</li>
            <li>Dedicated account manager for personalized assistance.</li>
            <li>Early access to new features and beta programs.</li>
            <li>Advanced analytics and detailed reports.</li>
            <li>High-priority customer service with instant chat support.</li>
          </ul>
          <button onClick={handlePlanChanging} data-role="premium" className="enroll">
            選擇premium方案
          </button>
        </article>
      </div>
    </div>

    // <div className="plans-and-pricing-wrap">
    //   <div className="plans-and-pricing">
    //       <div className="plans-and-pricing-title"><p>選擇最適合您的方案</p></div>
    //       <div className="plans-and-pricing-content">
    //           <div className="plans-and-pricing-plan1 js-plans">
    //               <div><p>免費試用1個月</p></div>
    //               <ul>
    //                   <li>上萬部電影無限搜尋</li>
    //                   <li>上萬篇影評無限瀏覽</li>
    //                   <li>免費評分電影</li>
    //                   <li>免費回應電影評論</li>
    //               </ul>
    //               <button onClick={handlePlanChanging} data-role="free" className='btn btn-primary'>立即選購</button>
    //           </div>
    //           <div className="plans-and-pricing-plan2 js-plans">
    //               <div><p>月租199$</p></div>
    //               <ul>
    //                   <li>上萬小時影片無限觀看</li>
    //                   <li>上萬首音樂無限聆聽</li>
    //                   <li>電影票購票優惠99元起</li>
    //                   <li>會員限定活動</li>
    //                   <li>電影獨家特點</li>
    //               </ul>
    //               <button onClick={handlePlanChanging} data-role="standard" className='btn btn-primary'>立即選購</button>
    //           </div>
    //           <div className="plans-and-pricing-plan3 js-plans">
    //               <div>
    //                   <p>季租$299</p>
    //                   <p>每月只要$99</p>
    //               </div>
    //               <ul>
    //                   <li>上萬小時影片無限觀看</li>
    //                   <li>上萬首音樂無限聆聽</li>
    //                   <li>電影票購票優惠99元起</li>
    //                   <li>會員限定活動</li>
    //                   <li>電影獨家特點</li>
    //               </ul>
    //               <button onClick={handlePlanChanging} data-role="premium" className='btn btn-primary'>立即選購</button>
    //           </div>
    //       </div>
    //       <div className="plans-pricing-arrow">
    //           <span className="plans-pricing-prev js-plans-pricing-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
    //           <span className="plans-pricing-next js-plans-pricing-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
    //       </div>
    //   </div>
    //   <div className='d-flex justify-content-center' style={ {margin:"100px"}}>
    //     <button onClick={handleQuestion} className='btn btn-primary'>
    //       常見問題
    //     </button>
    //   </div>
    // </div>
  )
}
