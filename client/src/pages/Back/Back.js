import React from "react";
import { Outlet, Link } from "react-router-dom"
import "../../styles/back.css"
import UserNav from "../UserNav/UserNav";

export default function Back({ currentUser, setCurrentUser }) {
  return (
      <div className="flex-grow overflow-hidden h-full flex flex-col">
        {/* <!--  上導覽   --> */}
        <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
          {/* <!--    按鈕     --> */}
          <div className="flex h-full text-gray-600 dark:text-gray-400">
            <Link to="yourReviews" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Reviews</Link>
            <Link to="yourRecommend" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Recommend</Link>
            <Link to="yourTheater" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center">Theater</Link>
          </div>
          {/* <!--    自己     --> */}
          <UserNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
        <Outlet />
      </div>

  )
}
