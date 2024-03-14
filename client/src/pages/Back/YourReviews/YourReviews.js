import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom"
import ContentService from "../../../services/content.service";

export default function YourReviews({ currentUser }) {
  const [isLoading, setLoading] = useState(true);
  const [contentData, setContentData] = useState(null);
  const [clickContent, setClickContent] = useState(null);
  const navigate = useNavigate()

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
    <div className="flex flex-grow overflow-x-hidden md:relative">
      {/* <!--   左半查詢其他user   --> */}
      <div className="mobile-nav absolute top-0 h-full w-5/6 flex-shrink-0 -translate-x-[1000px] overflow-y-auto border-r border-gray-200 bg-gray-100 p-5 md:static md:block md:w-72 md:-translate-x-0 md:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 md:dark:bg-gray-900">
        {/* 手機板上Nav */}
        <div className="mb-4 flex h-12 w-full items-end justify-around md:hidden">
          <div onClick={()=>{navigate("/back/yourReviews")}} className="flex flex-grow justify-center truncate border-b-2 border-gray-900 dark:border-gray-100 dark:text-gray-100">Reviews</div>
          <div onClick={()=>{navigate("/back/yourRecommend")}} className="flex flex-grow justify-center truncate dark:text-gray-100">Recommend</div>
          <div onClick={()=>{navigate("/back/yourTheater")}} className="flex flex-grow justify-center truncate dark:text-gray-100">Theater</div>
        </div>
        {/* 左Nav */}
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
      {/* <!--   右內容    --> */}
      <div className="h-full flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <Outlet key={clickContent} />
      </div>
    </div>
  )
}
