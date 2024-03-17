import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../../styles/handleSlide.css"
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleTheater() {
  const [clickTitle, setClickTitle] = useState(null);
  const [isHidden, setIsHidden] = useState("hidden");
  const [isDisplay, setIsDisplay] = useState(null)
  const [selectedLink, setSelectedLink] = useState("熱映中");

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

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
  };
  

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
      <div className="flex flex-grow overflow-x-hidden">
        {/* 左導覽 */}
        <div className={`${isDisplay} w-full h-sreen flex-shrink-0 overflow-y-auto border-r border-gray-200 bg-gray-100 p-5 md:static md:block md:w-1/4 md:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 md:dark:bg-gray-900`}>
          <div className="space-y-4 mt-3">
            <Link to="onTime" onClick={() => {handleClickTitle("熱映中");handleLinkClick("熱映中")}} className={`${selectedLink === "熱映中" ? "ring-2 ring-blue-500" : ""} bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow focus:outline-none`}>
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">熱映中</div>
            </Link>
            <Link to="comingSoon" onClick={() => {handleClickTitle("近期上映");handleLinkClick("近期上映")}} className={`${selectedLink === "近期上映" ? "ring-2 ring-blue-500" : ""} bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow focus:outline-none`}>
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">近期上映</div>
            </Link>
            <Link to="leavingSoon" onClick={() => {handleClickTitle("即將下映");handleLinkClick("即將下映")}} className={`${selectedLink === "即將下映" ? "ring-2 ring-blue-500" : ""} bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow focus:outline-none`}>
              <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">即將下映</div>
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
