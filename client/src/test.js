import React from 'react'
import { Outlet, Link } from "react-router-dom"

export default function Test() {
  return (
    <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
      {/* <!--    按鈕     --> */}
      <div className="flex h-full text-gray-600 dark:text-gray-400">
        <Link onClick={() => toggleOpen(1)} className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Reviews</Link>
        <Link onClick={() => toggleOpen(2)} className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Recommend</Link>
        <Link onClick={() => toggleOpen(3)} className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center">Theater</Link>
      </div>
      {/* <!--    自己     --> */}
      <div className="ml-auto flex items-center space-x-7">
        <button className="h-8 px-3 rounded-md shadow text-white bg-blue-500">Deposit</button>

        <button className="flex items-center">
          <span className="relative flex-shrink-0">
            <img className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
            <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
          </span>
          <span className="ml-2">James Smith</span>
          <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      <Outlet />
    </div>
  )
}
