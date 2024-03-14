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
    <div className="flex h-full flex-grow flex-col overflow-hidden">
      {/* <!--  上導覽   --> */}
      <div className="mb:px-10 flex w-full border-b border-gray-200 dark:border-gray-800">
        {/* 漢堡 */}
        <div class="flex items-center justify-center px-4 md:hidden">
          <button class="flex h-10 w-10 flex-col items-center justify-center focus:outline-none">
            <span class="block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
            <span class="mt-1 block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
            <span class="mt-1 block h-0.5 w-6 rounded-sm bg-gray-900 dark:bg-gray-200"></span>
          </button>
        </div>
        {/* <!--  自己的頭像   --> */}
        <div className="sticky top-0 flex w-full border-b border-gray-200 bg-gray-100 px-4 md:px-10 dark:border-gray-800 dark:bg-gray-900">
          <UserNav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
      </div>
      <div className="flex flex-grow overflow-x-hidden md:relative">
        {/* <!--   左半查詢其他user   --> */}
        <div className="absolute top-0 h-full w-5/6 flex-shrink-0 -translate-x-[1000px] overflow-y-auto border-r border-gray-200 bg-gray-100 p-5 md:static md:block md:w-72 md:-translate-x-0 md:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 md:dark:bg-gray-900">
          <div className="text-xs text-gray-400 tracking-wider">USERS</div>
          {/* 各個User */}
          <div className="space-y-4 mt-3">
            {allUser && allUser.map((user)=>{
              return(
                <Link to={`${user._id}/userReviews`} onClick={handleChange} data-user-id={user._id} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
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
      </div>
    </div>
  )
}

export default AllUser;





