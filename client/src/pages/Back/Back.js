import React from "react";
import { Outlet, Link } from "react-router-dom"
import "../../styles/back.css"
import UserNav from "../UserNav/UserNav";

export default function Back({ currentUser, setCurrentUser }) {
  
  return (
    <div className="flex-grow overflow-hidden h-full flex flex-col">
      {/* <!--  上導覽   --> */}
      <div className="lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
        {/* <!--    按鈕     --> */}
        <div className="flex h-full text-gray-600 dark:text-gray-400">
          <Link to="yourReviews" className="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Reviews</Link>
          <Link to="yourRecommend" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Recommend</Link>
          <Link to="yourTheater" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Theater</Link>
        </div>
        {/* <!--    自己     --> */}
        <div className="bg-gray-100 sm:flex hidden w-full border-b border-gray-200 dark:border-gray-800 px-10 sticky top-0">
          <UserNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
      </div>
      {/* <!--   下內容   --> */}
      <Outlet />
    </div>

  )
}
