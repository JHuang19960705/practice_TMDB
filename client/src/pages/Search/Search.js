import React from 'react'
import { Link, Outlet } from "react-router-dom"
import UserNav from '../UserNav/UserNav';

export default function Search({ currentUser, setCurrentUser }) {

  return (
    <div className="flex h-full flex-grow flex-col overflow-hidden">
      {/* <!--  上導覽   --> */}
      <div className="mb:px-10 flex w-full border-b border-gray-200 dark:border-gray-800">
        {/* 漢堡 */}
        <div class="flex items-center justify-center px-4 md:hidden">
          <button class="flex h-10 w-10 flex-col items-center justify-center focus:outline-none">
            <span class="block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
            <span class="mt-1 block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
            <span class="mt-1 block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
          </button>
        </div>
        {/* <!--    TV & Movie     --> */}
        <div className="md:flex hidden h-full text-gray-600 pl-5 dark:text-gray-400">
          <Link to="movie" className="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Movie</Link>
          <Link to="TV" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">TV</Link>
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