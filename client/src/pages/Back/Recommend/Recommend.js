import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Recommend({ currentUser, setCurrentUser }) {
  const [clickTitle, setClickTitle] = useState(null);
  const [isHidden, setIsHidden] = useState("hidden");
  const [isDisplay, setIsDisplay] = useState(null)

  const handleClickTitle = (title) => {
    setClickTitle(title);
    setIsHidden(null);
    setIsDisplay("hidden");
  }

  const handleNavDisplay = () => {
    setIsDisplay(null);
    setClickTitle(null);
    setIsHidden("hidden");
  }

  return (
    <div className="flex flex-col flex-grow overflow-x-hidden">
      {/* 手機板返回導覽 */}
      <div className={`pt-2 flex w-full items-center justify-right md:hidden ${isHidden}`}>
        <div className="cursor-pointer" onClick={handleNavDisplay}>
          <svg class="w-6 mx-1 text-gray-700 transform dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div>{clickTitle}</div>
      </div>
      {/* 下內容 */}
      <div className="flex flex-grow overflow-x-hidden md:relative">
        {/* 左導覽 */}
        <div className={`${isDisplay} w-full h-sreen flex-shrink-0 overflow-y-auto border-r border-gray-200 bg-gray-100 p-5 md:static md:block md:w-72 md:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 md:dark:bg-gray-900`}>
          <div className="space-y-4 mt-3">
            <Link to="handleSlide" onClick={() => {handleClickTitle("電影介紹")}} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">電影介紹</div>
            </Link>
            <Link to="handleNews" onClick={() => {handleClickTitle("新聞分享")}} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">新聞分享</div>
            </Link>
            <Link to="handleCasts" onClick={() => {handleClickTitle("當紅明星")}} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">當紅明星</div>
            </Link> 
            <Link to="handleReview" onClick={() => {handleClickTitle("影評推薦")}} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">影評推薦</div>
            </Link> 
            <Link to="handleTheme" onClick={() => {handleClickTitle("主題分類")}} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">主題分類</div>
            </Link> 
            <Link to="handleFavorite" onClick={() => {handleClickTitle("最愛人物")}} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">最愛人物</div>
            </Link>
          </div>
        </div>
        {/* 右內容 */}
        <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
