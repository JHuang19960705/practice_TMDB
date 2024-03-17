import React, { useState, useEffect } from 'react'
import AuthService from '../../services/auth.service';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import UserNav from '../UserNav/UserNav';
import "../../styles/style.css";

const AllUser = ({ currentUser, setCurrentUser }) => {
  const [isLoading, setLoading] = useState(true);
  const [allUser, setAllUser] = useState(null);
  const [clickUser, setClickUser] = useState(null);
  const [clickTitle, setClickTitle] = useState(null);
  const [isHidden, setIsHidden] = useState("hidden");
  const [isDisplay, setIsDisplay] = useState(null)
  const navigate = useNavigate();

  const handleClickTitle = (title) => {
    setClickTitle(title);
    setIsHidden(null);
    setIsDisplay("hidden");
  }

  const handleNavDisplay = () => {
    setIsDisplay(null);
    setClickTitle(null);
    setIsHidden("hidden");
  }

  const handleChange = (id) => {
    setClickUser(id)
  }

  useEffect(() => {

    if (!currentUser) {
      navigate("/firstEnroll");
    }

    AuthService.getAllUser()
      .then((data) => {
        setAllUser(data.data);
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
    <div className="flex h-full flex-grow flex-col overflow-hidden">
      {/* <!--  上導覽   --> */}
      <div className="flex w-full border-b border-gray-200 dark:border-gray-800">
        {/* LOGO */}
        <Link to="/" className="pl-5 flex h-16 items-center justify-center text-blue-500 md:hidden">
          <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
            <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path>
          </svg>
        </Link>
        {/* <!--    按鈕     --> */}
        <div className="cursor-default hidden h-full pl-5 text-gray-600 md:flex dark:text-gray-400">
          <div className={`h-full border-b-2 inline-flex mr-8 items-center border-blue-500 text-blue-500 dark:text-white dark:border-white`}>Users</div>
        </div>
        {/* <!--  自己   --> */}
        <div className="sticky top-0 flex w-full border-b border-gray-200 bg-gray-100 px-4 md:px-10 dark:border-gray-800 dark:bg-gray-900">
          <UserNav currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
      </div>
      {/* 手機板上導覽 */}
      <div className={`cursor-default pt-5 flex w-full items-end justify-center md:hidden ${isDisplay}`}>
        <div className="pb-1 flex justify-center truncate border-b-2 border-blue-500 text-blue-500 dark:border-gray-100 dark:text-gray-100">Users</div>
      </div>
      {/* 下區 */}
      <div className="flex flex-col flex-grow overflow-x-hidden">
        {/* 手機板返回導覽 */}
        <div className={`pt-2 flex w-full items-center justify-right md:hidden ${isHidden}`}>
          <div className="cursor-pointer" onClick={handleNavDisplay}>
            <svg class="w-6 mx-1 text-gray-700 transform dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
          <div>{clickTitle}</div>
        </div>
        {/* 下內容 */}
        <div className="flex flex-grow overflow-x-hidden">
          {/* <!--   左導覽   --> */}
          <div className={`${isDisplay} w-full h-sreen flex-shrink-0 overflow-y-auto border-r border-gray-200 bg-gray-100 p-5 md:static md:block md:w-1/4 md:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 md:dark:bg-gray-900`}>
            {/* 各個User */}
            <div className="space-y-4 mt-3">
              {allUser && allUser.map((user) => {
                return (
                  <Link to={`${user._id}/userReviews`} onClick={() => { handleChange(user._id); handleClickTitle(user.username) }} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                    <div className="truncate flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                      {user.username}
                    </div>
                    <div className="flex items-center w-full">
                      <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
                        {user.role}
                      </div>
                      <div className="truncate ml-auto text-xs text-gray-500">{user.date.slice(0, 10)}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          {/* 右內容 */}
          <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
            {!clickUser && <div className="flex justify-center text-center md:text-2xl md:pt-32">點選一位用戶 <br/> 觀看他的影評、推薦片單、電影院</div>}
            <Outlet key={clickUser} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUser;





