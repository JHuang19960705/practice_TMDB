import React, { useState } from "react";
import "../../../styles/handleSlide.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleTheater() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-grow overflow-x-hidden md:relative">
      {/* 左導覽 */}
      <div className="mobile-nav absolute top-0 h-full w-5/6 flex-shrink-0 -translate-x-[1000px] overflow-y-auto border-r border-gray-200 bg-gray-100 p-5 md:static md:block md:w-72 md:-translate-x-0 md:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 md:dark:bg-gray-900">
        {/* 手機板上Nav */}
        <div class="mb-4 flex h-12 w-full items-end justify-around md:hidden">
          <div onClick={()=>{navigate("/back/yourReviews")}} class="flex flex-grow justify-center truncate dark:text-gray-100">Reviews</div>
          <div onClick={()=>{navigate("/back/yourRecommend")}} class="flex flex-grow justify-center truncate dark:text-gray-100">Recommend</div>
          <div onClick={()=>{navigate("/back/yourTheater")}} class="flex flex-grow justify-center truncate border-b-2 border-gray-900 dark:border-gray-100 dark:text-gray-100">Theater</div>
        </div>
        {/* 左Nav */}
        <div className="space-y-4 mt-3">
          <Link to="onTime" className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">熱映中</div>
          </Link>
          <Link to="comingSoon" className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">近期上映</div>
          </Link>
          <Link to="leavingSoon" className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">即將下映</div>
          </Link>
        </div>
      </div>
      {/* 右內容 */}
      <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}
