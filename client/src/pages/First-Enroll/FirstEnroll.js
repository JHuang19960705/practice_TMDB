import React from 'react';
import "../../styles/first-enroll.css";
import { Link, Outlet } from 'react-router-dom';

export default function FirstEnroll() {
  return (
    <div>
      <div className="flex justify-end items-center mb-1">
        <span>已經是會員</span>
        <Link to="login"  type="button" className="m-1 p-2 rounded-lg bg-yellow-200">登入</Link>
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
          <Link to="register/free" className="enroll">
            註冊free方案
          </Link>
          <Link to="login/free" >試用看看</Link>
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
          <Link to="register/standard" className="enroll">
            註冊standard方案
          </Link>
          <Link to="login/standard" >試用看看</Link>
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
          <Link to="register/premium" className="enroll">
            註冊premium方案
          </Link>
          <Link to="login/premium">試用看看</Link>
        </article>
      </div>
      <Outlet />
    </div>
  )
}
