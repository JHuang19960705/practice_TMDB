import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import ProfileComponent from './Profile/profile-component';


export default function Homepage({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/firstEnroll");
    }
  })

  return (
    <div className="h-full z-30 fixed overflow-y-auto flex flex-col md:flex-row w-screen bg-gradient-to-r from-indigo-900 to-blue-700">
      {/* 左邊 */}
      <div className="w-full h-full md:w-1/4">
        <div className="h-full flex flex-col py-5 md:py-5 px-5">
          {/* LOGO */}
          <div>
            <div onClick={() => { navigate("/allUser") }}>
              <svg className="cursor-pointer w-9 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
                <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className="hidden">漢堡</div>
          </div>
          {/* 右邊 */}
          <div className="md:hidden pt-10vh flex flex-col justify-end gap-40 w-full">
            <div className="flex-col items-start text-white box-border py-4">
              <h1 className="text-2xl leading-88">
                Film / TV Reviews <br />
                Platform
              </h1>
              <p className="page-subtitle mt-1 text-xs leading-48 text-green-500">Users can Write Reviews, Craft Showcase, and Experience Theater</p>
            </div>
          </div>
          {/* Nav */}
          <div className="mb-8 md:mt-12 flex-grow overflow-y-auto">
            <nav>
              <ul className="list-none flex flex-col md:space-y-6">
                <li onClick={() => { navigate("/allUser") }} className="cursor-pointer text-base text-white">View Users</li>
                <li onClick={() => { navigate("/back/yourReviews") }} className="cursor-pointer text-base text-white">Admin Dashboard</li>
                <li onClick={() => { navigate("/search/movie") }} className="cursor-pointer text-base text-white">Search Video</li>
              </ul>
            </nav>
          </div>
          {/* Information */}
          <div>
            {currentUser && (
              <ProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
            )}
          </div>
        </div>
      </div>
      {/* 右邊 */}
      <div className="hidden pt-10vh md:flex flex-col justify-end gap-40 w-full md:w-3/4">
        <div className="flex-col items-start text-white box-border md:pb-6 p-6">
          <h1 className="text-4xl leading-88 md:text-6xl">
            Film / TV Reviews <br />
            Platform
          </h1>
          <p className="page-subtitle mt-6 text-2xl md:text-3xl leading-48 text-green-500">Users can Write Reviews, Craft Showcase, and Experience Theater</p>
        </div>
      </div>
    </div>
  )
}
