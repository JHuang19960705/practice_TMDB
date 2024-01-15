import React from 'react'
import { Outlet, Link } from "react-router-dom"
import Footer from './components/CRABTV/Footer'

export const Layout = ({currentUser}) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">搜尋電影</Link></li>
          {currentUser && (currentUser.user.role == "standard" || "premium") && (          
            <li><Link to="/crabtv">你的電影大廳</Link></li>
          )}
          {currentUser && currentUser.user.role == "premium" && (              
            <li><Link to="/shopping">你的線上電影院</Link></li>
          )}
          {!currentUser && (
            <li><Link to="/register">註冊</Link></li>
          )}
          {!currentUser && (  
            <li><Link to="/login">登入</Link></li>
          )}
          {currentUser && (currentUser.user.role == "standard" || "premium") && (  
            <li><Link to="/enroll">留言</Link></li>
          )}
          {currentUser && (currentUser.user.role == "standard" || "premium") && (
            <li><Link to="/content">你的文章</Link></li>
          )}  
          {currentUser && (currentUser.user.role == "standard" || "premium") && (
            <li><Link to="/profile">個人資料</Link></li>
          )}
        </ul>
      </nav>
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;