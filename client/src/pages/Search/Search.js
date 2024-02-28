import React from 'react'
import { Outlet, Link } from "react-router-dom"
import UserNav from '../UserNav/UserNav';

export default function Search({ currentUser, setCurrentUser }) {

  return (
    <div className="flex-grow overflow-hidden h-full flex flex-col">
        {/* <!--  上導覽   --> */}
        <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
          {/* <!--    按鈕     --> */}
          <div className="flex h-full text-gray-600 dark:text-gray-400">
            <Link to="movie" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Movie</Link>
            <Link to="TV" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center">TV</Link>
          </div>
          {/* <!--    自己     --> */}
          <UserNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
        {/* <!--   下內容   --> */}
        <Outlet />
    </div>
  )
}