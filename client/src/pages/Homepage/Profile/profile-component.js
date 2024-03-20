import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

const ProfileComponent = ({ currentUser, setCurrentUser }) => {
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
    <div>
      {currentUser && (
        <div onClick={() => { openButton() }} className={`relative text-xs md:text-sm cursor-pointer flex-col items-start justify-around md:min-h-[132px] space-y-2 md:space-y-4 overflow-hidden rounded-2xl bg-green-500 p-4 text-slate-950`}>
          <div className="truncate">{currentUser.user.username}</div>
          <div className="truncate">{currentUser.user.email}</div>
          <div className="truncate">{currentUser.user.role}</div>
          <div className={`${isOpen ? "bottom-0" : "-bottom-20"} absolute w-full ease-linear duration-300 left-0 bg-white flex justify-between`}>
            <button onClick={handleUserLogout} className="w-full py-2 md:py-3 hover:scale-125 ease-linear duration-100">登出</button>
            <button onClick={handleUserPatch} className="w-full py-2 md:py-3 hover:scale-125 ease-linear duration-100">修改</button>
            <button onClick={handleUserPlan} className="w-full py-2 md:py-3 hover:scale-125 ease-linear duration-100">方案</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
