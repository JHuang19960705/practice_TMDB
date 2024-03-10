import React, { useState } from "react";
import "../../../styles/handleSlide.css"
import { Link, Outlet } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleTheater() {

  return (
    <div className="flex-grow flex dark:bg-gray-900 overflow-y-auto">
      {/* 左導覽 */}
      <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
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
      <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        {/* 右內容 */}
        <Outlet />
      </div>
    </div>
  )
}
