import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

export default function PatchProfile({ currentUser, setCurrentUser }) {
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
    try {
      let response = await AuthService.patchProfile(currentUser.user._id, username, email)
      window.alert("修改成功。您現在將被導向到首頁");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    } catch (e) {
      setMessage(e.response.data);
    };
  };

  return (
    <div className="flex justify-center w-full h-full items-center">
      <div className="rounded-lg border border-blue-400 bg-blue-100 p-5 shadow-xl  w-3/5 min-w-52">
        <div class="mb-5">
          <label for="username"><div class="mb-2 ml-2 text-sm">用戶名稱</div></label>
          <input
            onChange={handleUsername}
            type="text"
            class="h-9 w-full cursor-text rounded-2xl bg-gray-50 pl-4 text-xs outline-none hover:border hover:border-blue-500"
            name="username"
            defaultValue={currentUser.user.username}
          />
        </div>
        <div class="mb-5">
          <label for="email"><div class="mb-2 ml-2 text-sm">電子信箱</div></label>
          <input
            onChange={handleEmail}
            type="text"
            class="h-9 w-full cursor-text rounded-2xl bg-gray-50 pl-4 text-xs outline-none hover:border hover:border-blue-500"
            name="email"
            defaultValue={currentUser.user.email}
          />
        </div>
        <div class="mt-6 grid w-full md:grid-cols-2">
          <span class="flex items-center text-sm md:text-base justify-center text-red-600 md:justify-start">{message && message}</span>
          <div class="mt-3 flex justify-center md:mt-0 md:justify-end">
            <button onClick={() => navigate("/")} class="text-nowrap rounded border border-gray-300 bg-gray-200 px-2 py-1 text-sm font-bold text-white shadow-sm md:px-5 md:py-1 md:text-base">返回</button>
            <button onClick={handlePatchProfile} class="text-nowrap rounded border border-blue-300 bg-blue-500 px-2 py-1 text-sm font-bold text-white shadow-sm md:px-5 md:py-1 md:text-base">確認</button>
          </div>
        </div>
      </div>
    </div>
  );

}
