import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom"

export const Layout = ({ currentUser }) => {
  const [selectedLink, setSelectedLink] = useState("allUser");

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
  };

  return (
    <div className="relative">
      <div className="h-screen overflow-hidden bg-gray-100 text-sm text-gray-600 md:flex dark:bg-gray-900 dark:text-white">
        {/* <!-- 左導覽 --> */}
        <div className="absolute bottom-0 z-20 flex w-full flex-shrink-0 border-r border-gray-200 bg-white md:static md:w-20 md:flex-col dark:border-gray-800 dark:bg-gray-900">
          {/* 首頁 */}
          <Link to="/" className="hidden h-16 items-center justify-center text-blue-500 md:flex">
            <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
              <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
            </svg>
          </Link>
          {/* 子分頁 */}
          <div className="flex w-full items-center justify-around text-gray-400 md:mx-auto md:mt-4 md:flex-col md:space-y-4">
            {/* 大廳 */}
            <Link to="allUser" onClick={() => handleLinkClick("allUser")} className={`h-10 w-12 rounded-md flex items-center justify-center ${selectedLink === "allUser" ? 'bg-blue-100 text-blue-500 dark:text-gray-500' : 'hover:bg-gray-100 hover:dark:bg-gray-700 hover:dark:text-white'}`}>
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </Link>
            {/* 後台 */}
            <Link to="back/yourReviews" onClick={() => handleLinkClick("back")} className={`h-10 w-12 rounded-md flex items-center justify-center ${selectedLink === "back" ? 'bg-blue-100 text-blue-500 dark:text-gray-500' : 'hover:bg-gray-100 hover:dark:bg-gray-700 hover:dark:text-white'}`}>
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </Link>
            {/* 搜尋 */}
            <Link to="search/movie" onClick={() => handleLinkClick("search")} className={`h-10 w-12 rounded-md flex items-center justify-center ${selectedLink === "search" ? 'bg-blue-100 text-blue-500 dark:text-gray-500' : 'hover:bg-gray-100 hover:dark:bg-gray-700 hover:dark:text-white'}`}>
              <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;