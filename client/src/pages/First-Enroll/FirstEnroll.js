import React, { useEffect } from 'react';
import "../../styles/first-enroll.css";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth.service";

export default function FirstEnroll({currentUser, setCurrentUser}) {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      let response = await AuthService.login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("登入成功。您現在將被重新導向到個人資料頁面。");
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  },[])
  
  return (
    <div className="relative">
      {/* 選擇 */}
      <div>
        <div className="flex justify-end items-center mb-1"><span>已經是會員</span><Link type="button" className="m-1 rounded-lg bg-blue-500 p-2 text-white" to="login">登入</Link></div>
        <div className="flex justify-center"><p className="text-3xl">請選擇你的身份</p></div>
        <div className="pricing-container">
          <article className="pricing-card">
            <h3>Free</h3>
            <div>Essential features</div>
            <div className="pricing-card__price--original"><s>$0.99</s></div>
            <div className="pricing-card__price">$0.00</div>
            <div className="period">/ month</div>
            <ul>
              <li>Basic search to movie, TV series.</li>
              <li>Browse various film enthusiasts' movie reviews.</li>
              <li>Provide feedback on the movie reviews you like.</li>
            </ul>
            <Link to="register/free" className="enroll">註冊free方案</Link><button onClick={() => {handleLogin("FreeUser@mail.com", "FreeUser");}} className="try">試用看看</button>
          </article>
          <article className="pricing-card">
            <h3>Standard</h3>
            <div>Advanced features</div>
            <div className="pricing-card__price--original"><s>$15.00</s></div>
            <div className="pricing-card__price">$4.99</div>
            <div className="period">/ month</div>
            <ul>
              <li>All features of the Essential Plan.</li>
              <li>Create your own curated list of recommended movies.</li>
              <li>Write movie reviews to document your impressions and experiences.</li>
            </ul>
            <Link to="register/standard" className="enroll">註冊standard方案</Link><button onClick={() => {handleLogin("StandardUser@mail.com", "StandardUser");}} className="try">試用看看</button>
          </article>
          <article className="pricing-card pricing-card--primary">
            <h3>Pro</h3>
            <div>Premium features</div>
            <div className="pricing-card__price--original"><s>$25.00</s></div>
            <div className="pricing-card__price">$5.49</div>
            <div className="period">/ month</div>
            <ul>
              <li>All features of the Advanced Plan.</li>
              <li>Write movie reviews to document your impressions and experiences.</li>
              <li>Launch a movie theater with your own unique taste.</li>
            </ul>
            <Link to="register/premium" className="enroll">註冊premium方案</Link><button onClick={() => {handleLogin("PremiumUser@mail.com", "PremiumUser");}} className="try">試用看看</button>
          </article>
        </div>
      </div>
      {/* 登入or註冊 */}
      <Outlet />
    </div>
  )
}
