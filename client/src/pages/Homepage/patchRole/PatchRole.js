import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

export default function PatchRole({ currentUser, setCurrentUser }) {
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handlePlanChanging = async (e) => {
    try {
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
    <div className="flex h-full flex-grow flex-col justify-between overflow-x-hidden">
      <div className="mb-1 flex items-center justify-end"><button onClick={() => { navigate("/") }} type="button" className="m-1 rounded-lg bg-blue-500 p-2 text-white" >返回</button></div>
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
          <button onClick={handlePlanChanging} className="try">選擇Free方案</button>
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
          <button onClick={handlePlanChanging} className="try">選擇Standard方案</button>
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
          <button onClick={handlePlanChanging} className="try">選擇premium方案</button>
        </article>
      </div>
    </div>
  )
}
