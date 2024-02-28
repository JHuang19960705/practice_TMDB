import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../../../services/auth.service";

export default function TryRole({ currentUser, setCurrentUser }) {
  const { clickRole } = useParams();
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = async () => {
    try {
      let response = await AuthService.login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("登入成功。您現在將被重新導向到個人資料頁面。");
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    } catch (e) {
      setMessage(e.response.data);
    }
  };

  useEffect(()=>{
     if(clickRole === "free"){
      setUsername("Free User")
      setEmail("FreeUser@mail.com")
      setPassword("FreeUser")
      setRole("free")
    }else if (clickRole === "standard"){
      setUsername("Standard User")
      setEmail("StandardUser@mail.com")
      setPassword("StandardUser")
      setRole("standard")
    }else if (clickRole === "premium"){
      setUsername("Premium User")
      setEmail("PremiumUser@mail.com")
      setPassword("PremiumUser")
      setRole("premium")
    }
  },[clickRole])

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div>
          <label htmlFor="username">用戶名稱:</label>
          <input
            onChange={handleUsername}
            type="text"
            className="form-control"
            name="username"
            defaultValue = {username}
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
            defaultValue = {email}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">密碼：</label>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            name="password"
            placeholder="長度至少超過6個英文或數字"
            defaultValue = {password}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">身份：</label>
          <input
            onChange={handleRole}
            type="text"
            className="form-control"
            name="role"
            placeholder="只能填入free, standard, premium其中之一"
            defaultValue = {role}
          />
        </div>
        <br />
        <button onClick={handleLogin} className="btn btn-primary">
          <span>訪客登入</span>
        </button>
      </div>
    </div>
  );
};
