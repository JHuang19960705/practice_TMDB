import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

const LoginComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      let response = await AuthService.login(email, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("登入成功。您現在將被導向到首頁。");
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    } catch (e) {
      setMessage(e.response.data);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  },[])

  return (
    <div className="absolute left-1/2 top-1/2 z-10 w-3/5 min-w-52 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-blue-400 bg-blue-100 p-5 shadow-xl">
      <div onClick={() => { navigate("/firstEnroll") }} className="absolute right-1 top-1 h-5 w-5 cursor-pointer bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l-4.293-4.293-1.414 1.414L10.586 12l-4.293 4.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L12 10.586z" />
        </svg>
      </div>
      <div className="mb-5 h-full">
        <label htmlFor="email"><div className="mb-2 ml-2 text-sm">電子信箱</div></label>
        <input
          onChange={handleEmail}
          type="text"
          className="h-9 w-full cursor-text rounded-2xl bg-gray-50 pl-4 text-xs outline-none hover:border hover:border-blue-500"
          name="email"
        />
      </div>
      <div className="mb-5 h-full">
        <label htmlFor="password"><div className="mb-2 ml-2 text-sm">密碼</div></label>
        <input
          onChange={handlePassword}
          type="password"
          className="h-9 w-full cursor-text rounded-2xl bg-gray-50 pl-4 text-xs outline-none hover:border hover:border-blue-500"
          name="password"
        />
      </div>
      <div className="mt-6 grid w-full md:grid-cols-2">
        <span className="flex items-center text-sm md:text-base justify-center text-red-600 md:justify-start">{message && message}</span>
        <div className="mt-3 flex justify-center md:mt-0 md:justify-end">
          <button onClick={handleLogin} className="rounded border border-blue-300 bg-blue-500 px-2 py-1 text-sm font-bold text-white shadow-sm md:px-5 md:py-1 md:text-base">登入系統</button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
