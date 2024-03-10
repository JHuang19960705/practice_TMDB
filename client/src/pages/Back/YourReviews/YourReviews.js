import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom"
import ContentService from "../../../services/content.service";

export default function YourReviews({ currentUser }) {
  const [isLoading, setLoading] = useState(true);
  const [contentData, setContentData] = useState(null);
  const [clickContent, setClickContent] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      let _id;
      if (currentUser) {
        _id = currentUser.user._id;
        let data;
        if (currentUser.user.role === "standard" || currentUser.user.role === "premium") {
          data = await ContentService.getContentByUserId(_id);
        } else if (currentUser.user.role === "free") {
          data = await ContentService.getEnrolledContents(_id);
        }
        setContentData(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const displayContent = (e)=>{
    setClickContent(e.currentTarget.dataset.contentId)
  } 

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="flex-grow flex dark:bg-gray-900 overflow-y-auto">
      {/* <!--   左半查詢其他user   --> */}
      <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
        <div className="space-y-4 mt-3">
          {contentData && contentData.map((content) => {
            return (
              <Link
                to={`${content._id}`} 
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
      {/* <!--   用戶內容    --> */}
      <div className="h-full flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <Outlet key={clickContent} />
      </div>
    </div>
  )
}
