import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

export default function PatchProfile({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  useEffect(() => {
    setUsername(currentUser.user.username);
    setEmail(currentUser.user.email);
  }, [])

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePatchProfile = async () => {
    try{  
      let response = await AuthService.patchProfile(currentUser.user._id, username, email)
      window.alert("修改成功。您現在將被導向到個人資料頁面");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/profile");
    } catch (e) {
      setMessage(e.response.data);
    };
  };

  return (
    <div style={{ padding: "1rem" }} className="d-flex flex-column col-md-10">
      <div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div>
          <label htmlFor="username">用戶名稱:</label>
          <input
            onChange={handleUsername}
            type="text"
            className="form-control"
            name="username"
            defaultValue={currentUser.user.username}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">電子信箱：</label>
          <input
            onChange={handleEmail}
            type="text"
            className="form-control"
            name="email"
            defaultValue={currentUser.user.email}
          />
        </div>
        <br />
        <div className="d-flex justify-content-between">
          <button onClick={handlePatchProfile} className="btn btn-primary">
            <span>修改資料</span>
          </button>
          <button onClick={()=>navigate("/")} className="btn btn-secondary">
            <span>返回</span>
          </button>
        </div>
      </div>
    </div>
  );

}
