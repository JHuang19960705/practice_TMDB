import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

const ProfileComponent = ({ currentUser, setCurrentUser }) => {
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
  return (
    <div>
      {!currentUser && <div>在獲取您的個人資料之前，您必須先登錄。</div>}
      {currentUser && (
        <div className="flex-col items-start justify-around min-h-[132px] w-full space-y-4 overflow-hidden rounded-2xl bg-green-500 p-4 text-slate-950">
          <div>姓名{currentUser.user.username}</div>
          <div>信箱{currentUser.user.email}</div>
          <div>身份{currentUser.user.role}</div>
        </div>
          // {/* <div className="d-flex flex-row-reverse">
          //   <button onClick={handleUserLogout} className="btn btn-secondary btn-lg p-2">登出</button>
          //   <button onClick={handleUserPatch} className="btn btn-secondary btn-lg p-2">修改</button>
          //   <button onClick={handleUserPlan} className="btn btn-secondary btn-lg p-2">方案</button>
          // </div> */}
      )}
    </div>
  );
};

export default ProfileComponent;
