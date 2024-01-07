import React from 'react'
import { Outlet, Link } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">回到首頁</Link></li>
          <li><Link to="/crabtv">CRABTV</Link></li>
          <li><Link to="/shopping">電影嚴選</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout;