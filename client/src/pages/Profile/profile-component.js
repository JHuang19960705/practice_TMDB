import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

const ProfileComponent = ({ currentUser, setCurrentUser }) => {
  const nagivate = useNavigate();
  const handleUserLogout = () => {
    window.alert("登出成功。您現在將被重新導向到首頁。");
    setCurrentUser(null);
    AuthService.logout();
    nagivate("/");
  }
  const handleUserPatch = () => {
    nagivate("/patchProfile")
  }
  const handleUserPlan = () => {
    nagivate("/plan")
  }
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && <div>在獲取您的個人資料之前，您必須先登錄。</div>}
      {currentUser && (
        <div className="card">
          <h2>以下是您的個人檔案：</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>姓名：{currentUser.user.username}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>您的用戶ID: {currentUser.user._id}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>您註冊的電子信箱: {currentUser.user.email}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>身份: {currentUser.user.role}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex flex-row-reverse">
            <button onClick={handleUserLogout} className="btn btn-secondary btn-lg p-2">登出</button>
            <button onClick={handleUserPatch} className="btn btn-secondary btn-lg p-2">修改</button>
            <button onClick={handleUserPlan} className="btn btn-secondary btn-lg p-2">方案</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
