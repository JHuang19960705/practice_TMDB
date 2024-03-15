import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import ProfileComponent from './Profile/profile-component';


export default function Homepage({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!currentUser){ 
      navigate("/firstEnroll");
    }
  })

  return (
    <div className="z-30 fixed flex h-screen w-screen bg-gradient-to-r from-indigo-900 to-blue-700">
      <div className="flex">
        {/* 左邊 */} 
        <div className="relative w-[296px]">
          <div className="fixed top-0 h-screen flex flex-col p-6 w-[296px]">
            <div>
              <div onClick={()=>{navigate("/allUser")}}  className="pl-5">
                <svg className="cursor-pointer w-9 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
                  <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
                </svg>
              </div>
              <div className="hidden">漢堡</div>
            </div>
            <div className="mb-8 mt-12 flex-grow overflow-y-auto">
              <nav className="h-full">
                <ul className="m-0 list-none flex flex-col space-y-6 p-0">
                  <li onClick={()=>{navigate("/allUser")}} className="cursor-pointer pl-5 text-base text-white">View Users</li>
                  <li onClick={()=>{navigate("/back/yourReviews")}} className="cursor-pointer pl-5 text-base text-white">Admin Dashboard</li>
                  <li onClick={()=>{navigate("/search/movie")}} className="cursor-pointer pl-5 text-base text-white">Search Video</li>
                </ul>
              </nav>
            </div>
            <div>
              {currentUser && (
                <ProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
              )}
            </div>
          </div>
        </div>
        {/* 右邊 */}
        <div className="pt-10vh flex flex-col justify-end gap-40 w-[100%-296px]">
          <div className="flex-col items-start text-white box-border pb-6">
            <h1 className="text-6xl leading-88">
              Film / TV Reviews <br />
              Platform
            </h1>
            <p className="page-subtitle mt-6 text-3xl leading-48 text-green-500">Users can Write Reviews, Craft Showcase, and Experience Theater</p>
          </div>
        </div>
      </div>
    </div>

  )
}
