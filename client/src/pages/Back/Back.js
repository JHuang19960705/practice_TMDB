import React from "react";
import { Outlet, Link } from "react-router-dom"
import "../../styles/back.css"
import UserNav from "../UserNav/UserNav";

export default function Back({ currentUser, setCurrentUser }) {
  const openHamburger = () => {
    const hamburger = document.querySelector(".open-hamburger");
    const mobileNav = document.querySelector(".mobile-nav");
    hamburger.addEventListener("click", () => {
      mobileNav.style.transform = "translateX(0)"; 
    });
  }
  return (
    <div className="flex h-full flex-grow flex-col overflow-hidden">
      {/* <!--  上導覽   --> */}
      <div className="mb:px-10 flex w-full border-b border-gray-200 dark:border-gray-800">
        {/* 漢堡 */}
        <div onClick={openHamburger} className="open-hamburger flex items-center justify-center px-4 md:hidden">
          <button class="flex h-10 w-10 flex-col items-center justify-center focus:outline-none">
            <span class="block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
            <span class="mt-1 block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
            <span class="mt-1 block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
          </button>
        </div>
        {/* <!--    按鈕     --> */}
        <div className="md:flex hidden h-full text-gray-600 pl-5 dark:text-gray-400">
          <Link to="yourReviews" className="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Reviews</Link>
          <Link to="yourRecommend" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Recommend</Link>
          <Link to="yourTheater" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Theater</Link>
        </div>
        {/* <!--    自己     --> */}
        <div className="sticky top-0 flex w-full border-b border-gray-200 bg-gray-100 px-4 md:px-10 dark:border-gray-800 dark:bg-gray-900">
          <UserNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
      </div>
      {/* <!--   下內容   --> */}
      <Outlet />
    </div>

  )
}
