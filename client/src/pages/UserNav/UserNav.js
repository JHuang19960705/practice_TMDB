import React from 'react'

export default function UserNav({ currentUser, setCurrentUser }) {

  return (
    <div className="ml-auto flex items-center space-x-7">
      <button className="truncate h-8 px-3 rounded-md shadow text-white bg-blue-500">寫影評</button>
      <button className="flex items-center">
        <span className="relative flex-shrink-0">
          <img className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
          <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
        </span>
        {currentUser && (
          <span className="ml-2">{currentUser.user.username}</span>
        )}
        <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  )
}
