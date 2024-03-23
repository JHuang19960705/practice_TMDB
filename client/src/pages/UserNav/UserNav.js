import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default function UserNav({ currentUser, setCurrentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const nagivate = useNavigate();

  const handleUserLogout = () => {
    window.alert("登出成功。您現在將被重新導向到首頁。");
    setCurrentUser(null);
    AuthService.logout();
    nagivate("/");
  }

  const handleUserPatch = () => {
    nagivate("/profile/patchProfile")
  }

  const handleUserPlan = () => {
    nagivate("/profile/patchRole")
  }

  const openButton = () => {
    isOpen && setIsOpen(false);
    !isOpen && setIsOpen(true);
  }

  return (
    <div className="ml-auto flex items-center space-x-7">
      <button onClick={() => { openButton() }} className="relative flex items-center">
        <span className="relative flex-shrink-0">
          <img className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
          <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
        </span>
        {currentUser && (
          <span className="ml-2 truncate w-20">{currentUser.user.username}</span>
        )}
        <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        <div className={`${isOpen ? "-bottom-[140px] md:-bottom-[167px] opacity-100" : "bottom-[170px] opacity-0"} absolute w-full flex flex-col ease-linear duration-300 bg-blue-500 text-white justify-center`}>
          <button onClick={handleUserPlan} className="w-full py-2 md:py-3 hover:scale-125 ease-linear duration-100">方案</button>
          <button onClick={handleUserPatch} className="w-full py-2 md:py-3 hover:scale-125 ease-linear duration-100">修改</button>
          <button onClick={handleUserLogout} className="w-full py-2 md:py-3 hover:scale-125 ease-linear duration-100">登出</button>
        </div>
      </button>
    </div>
  )
}
