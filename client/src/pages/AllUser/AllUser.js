import React, { useState, useEffect } from 'react'
import AuthService from '../../services/auth.service';
import "../../styles/style.css";
import { Outlet, Link } from 'react-router-dom';
import UserNav from '../UserNav/UserNav';

const AllUser = ({ currentUser, setCurrentUser }) => {
  const [isLoading, setLoading] = useState(true);
  const [allUser, setAllUser] = useState(null);
  const [clickUser, setClickUser] = useState(null);

  useEffect(() => {
    AuthService.getAllUser()
      .then((data) => {
        setAllUser(data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handleChange = (e) => {
    setClickUser(e.currentTarget.dataset.userId)
  }
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="flex-grow overflow-hidden h-full flex flex-col">
      {/* <!--  上導覽   --> */}
      <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
        {/* <!--  自己的頭像   --> */}
        <div className="bg-gray-100 h-10 sm:flex hidden w-full border-b border-gray-200 dark:border-gray-800 px-10 sticky top-0">
          <UserNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
      </div>
      <div className="flex-grow flex overflow-x-hidden">
        {/* <!--   左半查詢其他user   --> */}
        <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
          <div className="text-xs text-gray-400 tracking-wider">USERS</div>
          {/* 搜尋圖 */}
          <div className="relative mt-2">
            <input type="text" className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search"/>
            <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          {/* 各個User */}
          <div className="space-y-4 mt-3">
            {allUser && allUser.map((user)=>{
              return(
                <Link to={`${user._id}`} onClick={handleChange}  data-user-id={user._id} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                  <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                    {user.username}
                  </div>
                  <div className="flex items-center w-full">
                    <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
                      {user.role}
                    </div>
                    <div className="ml-auto text-xs text-gray-500">{user.date.slice(0, 10)}</div>
                  </div>
                </Link>
              )
            })}           
          </div>
        </div>
        <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          <Outlet key={clickUser}/>
        </div>
        {/* <iframe src="https://practice-tmdb-client.vercel.app/content" width="90%" height="400" ></iframe> */}
      </div>
    </div>
  )
}

export default AllUser;





