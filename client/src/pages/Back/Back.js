import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom"
import UserNav from "../UserNav/UserNav";
import "../../styles/back.css"

export default function Back({ currentUser, setCurrentUser }) {
  const [selectedLink, setSelectedLink] = useState("yourReviews");
  const navigate = useNavigate();

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/firstEnroll");
    }
  })

  return (
    <div className="flex h-full flex-grow flex-col overflow-x-hidden">
      {/* <!--  上導覽   --> */}
      <div className="flex w-full border-b border-gray-200 dark:border-gray-800">
        {/* LOGO */}
        <Link to="/" class="pl-5 flex h-16 items-center justify-center text-blue-500 md:hidden">
          <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
            <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path>
          </svg>
        </Link>
        {/* <!--    按鈕     --> */}
        <div className="hidden h-full pl-5 text-gray-600 md:flex dark:text-gray-400">
          <Link to="yourReviews" onClick={() => handleLinkClick("yourReviews")} className={`cursor-pointer h-full border-b-2 inline-flex mr-8 items-center ${selectedLink === "yourReviews" ? 'border-blue-500 text-blue-500 dark:text-white dark:border-white' : 'dark:text-gray-400 border-transparent'}`}>Reviews</Link>
          <Link to="yourRecommend/handleSlide" onClick={() => handleLinkClick("yourRecommend")} className={`cursor-pointer h-full border-b-2 inline-flex mr-8 items-center ${selectedLink === "yourRecommend" ? 'border-blue-500 text-blue-500 dark:text-white dark:border-white' : 'dark:text-gray-400 border-transparent'}`}>Recommend</Link>
          <Link to="yourTheater/onTime" onClick={() => handleLinkClick("yourTheater")} className={`cursor-pointer h-full border-b-2 border-transparent inline-flex mr-8 items-center ${selectedLink === "yourTheater" ? 'border-blue-500 text-blue-500 dark:text-white dark:border-white' : 'dark:text-gray-400 border-transparent'}`}>Theater</Link>
        </div>
        {/* <!--    自己     --> */}
        <div className="sticky top-0 flex w-full border-b border-gray-200 bg-gray-100 px-4 md:px-10 dark:border-gray-800 dark:bg-gray-900">
          <UserNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
      </div>
      {/* 手機板上導覽 */}
      <div className="pt-5 flex w-full items-end justify-around md:hidden">
        <Link to="yourReviews" onClick={() => handleLinkClick("yourReviews")} className={`pb-1 cursor-pointer flex flex-grow justify-center w-full truncate border-b-2 ${selectedLink === "yourReviews" ? 'border-blue-500 text-blue-500 dark:border-gray-100  dark:text-gray-100' : 'dark:text-gray-400 border-transparent'}`}>Reviews</Link>
        <Link to="yourRecommend" onClick={() => handleLinkClick("yourRecommend")} className={`pb-1 cursor-pointer flex flex-grow justify-center w-full truncate border-b-2 ${selectedLink === "yourRecommend" ? 'border-blue-500 text-blue-500 dark:border-gray-100 dark:text-gray-100' : 'dark:text-gray-400 border-transparent'}`}>Recommend</Link>
        <Link to="yourTheater" onClick={() => handleLinkClick("yourTheater")} className={`pb-1 cursor-pointer flex flex-grow justify-center w-full truncate border-b-2 ${selectedLink === "yourTheater" ? 'border-blue-500 text-blue-500 dark:border-gray-100  dark:text-gray-100' : 'dark:text-gray-400 border-transparent'}`}>Theater</Link>
      </div>
      {/* <!--   下內容   --> */}
      <Outlet />
    </div>

  )
}
