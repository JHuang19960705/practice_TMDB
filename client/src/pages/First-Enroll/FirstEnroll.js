import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import Loader from "../../components/Loader";

export default function FirstEnroll({ currentUser, setCurrentUser }) {
  const [loading, setLoading] = useState(false); // 初始化加載狀態為 false
  const navigate = useNavigate();

  // 登入
  const handleLogin = async (email, password) => {
    try {
      setLoading(true); // 設置加載狀態為 true，顯示 Loader
      let response = await AuthService.login(email, password);
      
      if (response) {
        localStorage.setItem("user", JSON.stringify(response.data)); // 將登入用戶存在localStorage中
        window.alert("登入成功。您現在將被重新導向到個人資料頁面。");
        setCurrentUser(AuthService.getCurrentUser());
        navigate("/"); // 導航至首頁
      };
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false); // 無論登入成功與否，都隱藏 Loader
    }
  };

  // 檢查是否有登入，若有則導航至首頁
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div className="relative dark:bg-gray-900 dark:text-white">
      {loading && <Loader />} {/* 如果 loading 為 true，顯示 Loader */}
      {/* 選擇身份區域 */}
      <div>
        {/* 已經是會員，點擊跳轉至登入頁面 */}
        <div className="flex justify-end items-center mb-1"><span>已經是會員</span><Link type="button" className="m-1 rounded-lg bg-blue-500 p-2 text-white" to="login">登入</Link></div>
        {/* 選擇身份提示 */}
        <div className="flex justify-center"><p className="text-3xl">請選擇你的身份</p></div>
        {/* 方案選擇區域 */}
        <div className="pricing-container">
          {/* Free方案 */}
          <article className="pricing-card">
            <h3>Free</h3>
            <div>Essential features</div>
            <div className="pricing-card__price--original"><s>$0.99</s></div>
            <div className="pricing-card__price">$0.00</div>
            <div className="period">/ month</div>
            <ul>
              <li>Basic search to movie, TV series.</li>
              <li>Browse various film enthusiasts" movie reviews.</li>
              <li>Provide feedback on the movie reviews you like.</li>
            </ul>
            {/* 註冊Free方案按鈕 */}
            <Link to="register/free" className="enroll">註冊free方案</Link>
            {/* 試用看看按鈕 */}
            <button onClick={() => { handleLogin("FreeUser@mail.com", "FreeUser"); }} className="try">試用看看</button>
          </article>
          {/* Standard方案 */}
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
            {/* 註冊Standard方案按鈕 */}
            <Link to="register/standard" className="enroll">註冊standard方案</Link>
            {/* 試用看看按鈕 */}
            <button onClick={() => { handleLogin("StandardUser@mail.com", "StandardUser"); }} className="try">試用看看</button>
          </article>
          {/* Pro方案 */}
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
            {/* 註冊Premium方案按鈕 */}
            <Link to="register/premium" className="enroll">註冊premium方案</Link>
            {/* 試用看看按鈕 */}
            <button onClick={() => { handleLogin("PremiumUser@mail.com", "PremiumUser"); }} className="try">試用看看</button>
          </article>
        </div>
      </div>
      {/* 登入or註冊組件 */}
      <Outlet />
    </div>
  )
}
