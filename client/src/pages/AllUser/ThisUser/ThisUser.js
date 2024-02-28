import React, { useState, useEffect } from 'react'
import { Outlet, Link, useParams } from "react-router-dom"
import AuthService from "../../../services/auth.service";

export default function ThisUser({ currentUser, setCurrentUser }) {  
  const [isLoading, setLoading] = useState(true);
  const [thisUser, setThisUser] = useState(null);
  const { userId } = useParams();
  
  useEffect(() => {
    AuthService.getUserById(userId)
        .then((data) => {
          setThisUser(data.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="flex-grow bg-white dark:bg-gray-900">
      {/* <!--   用戶頭像    --> */}
      {thisUser && (
        <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800">
          <div className="flex w-full items-center">
            <div className="flex items-center text-3xl text-gray-900 dark:text-white">
              <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&amp;format=auto&amp;height=512&amp;version=1582611188&amp;width=512" className="w-12 mr-4 rounded-full" alt="profile"/>
              {thisUser.username}
            </div>
            <div className="ml-auto sm:flex hidden items-center justify-end">
              <div className="text-right">
                <div className="text-xs text-gray-400 dark:text-gray-400">{thisUser.role}</div>
                <div className="text-gray-900 text-lg dark:text-white">{thisUser.date.slice(0, 10)}</div>
              </div>
              <button className="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <svg viewBox="0 0 24 24" className="w-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:mt-7 mt-4">
            <Link to="userReviews" className="px-3 dark:text-white dark:border-white pb-1.5 border-blue-500 text-blue-500 border-transparent">Review</Link>
            <Link to="userRecommend" className="px-3 border-b-2 pb-1.5 text-gray-600 dark:text-gray-400">Recommend</Link>
            <Link to="userTheater" className="px-3 border-b-2 pb-1.5 border-transparent text-gray-600 dark:text-gray-400 ">Theater</Link>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center overflow-hidden h-50">
        <Outlet />
        {/* <iframe src="https://practice-tmdb-client.vercel.app/content" width="90%" height="400" ></iframe>
        <UserRecommend currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <UserTheater currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
      </div>
    </div>
  )
}