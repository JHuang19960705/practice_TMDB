import React, { useState, useEffect } from 'react'
import { Outlet, Link, useParams } from "react-router-dom"
import AuthService from "../../../services/auth.service";

export default function ThisUser({ currentUser, setCurrentUser }) {  
  const [isLoading, setLoading] = useState(true);
  const [thisUser, setThisUser] = useState(null);
  const { userId } = useParams();
  const [selectedLink, setSelectedLink] = useState("Reviews");

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
  };

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
        <div className="md:px-7 md:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800">
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
          <div className="flex items-center justify-between md:justify-start space-x-3 md:mt-7 mt-4">
            <Link to="userReviews" onClick={() => handleLinkClick("Reviews")} className={`truncate md:px-3 pb-1.5 border-b-2 cursor-pointer ${selectedLink === "Reviews" ? 'border-blue-500 text-blue-500 dark:border-gray-100  dark:text-gray-100' : 'dark:text-gray-400 border-transparent'}`}>Reviews</Link>
            <Link to="userRecommend" onClick={() => handleLinkClick("Recommend")} className={`truncate md:px-3 pb-1.5 border-b-2 cursor-pointer ${selectedLink === "Recommend" ? 'border-blue-500 text-blue-500 dark:border-gray-100  dark:text-gray-100' : 'dark:text-gray-400 border-transparent'}`}>Recommend</Link>
            <Link to="userTheater" onClick={() => handleLinkClick("Theater")} className={`truncate md:px-3 pb-1.5 border-b-2 cursor-pointer ${selectedLink === "Theater" ? 'border-blue-500 text-blue-500 dark:border-gray-100  dark:text-gray-100' : 'dark:text-gray-400 border-transparent'}`}>Theater</Link>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  )
}
