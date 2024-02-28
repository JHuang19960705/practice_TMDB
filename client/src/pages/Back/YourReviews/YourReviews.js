import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom"
import ContentService from "../../../services/content.service";

export default function YourReviews({ currentUser, setCurrentUser }) {
  const [isLoading, setLoading] = useState(true);
  const [contentData, setContentData] = useState(null);
  const [clickContent, setClickContent] = useState(null);

  useEffect(() => {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
      if (currentUser.user.role ==  "standard" || currentUser.user.role ==  "premium") {
        ContentService.get(_id)
          .then((data) => {
            setContentData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "free") {
        ContentService.getEnrolledContents(_id)
          .then((data) => {
            console.log(data);
            setContentData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
    setLoading(false);
  }, []);

   const displayContent = (e)=>{
    setClickContent(e.currentTarget.dataset.contentId)
  } 

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="flex-grow flex">
      {/* <!--   左半查詢其他user   --> */}
      <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
        <div className="relative mt-2">
          <input type="text" className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search"/>
          <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <div className="space-y-4 mt-3">
          {contentData && contentData.map((content) => {
            return (
              <Link to={`${content._id}`} 
                onClick={displayContent} 
                data-content-id={content._id} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                  {content.title}
                </div>
                <div className="flex items-center w-full">
                  <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">{content.tags}</div>
                  <div className="ml-auto text-xs text-gray-500">{content.date.slice(0,10)}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {/* <!--   右半區塊   --> */}
      <div className="flex-col w-full h-screen overflow-y-auto h-full">
        {/* <!--   用戶內容    --> */}
        <div className="flex-grow bg-white dark:bg-gray-900">
          <Outlet key={clickContent}/>
        </div>

      </div>
    </div>
  )
}
