import React from 'react'
import SearchTheme from '../SearchTheme/SearchTheme';

export default function LeavingSoon({currentUser, setCurrentUser}) {
  const handlePatchSlide = async() => {
    try{  
      let response = await AuthService.patchSlide(currentUser.user._id, slide)
      window.alert("修改成功。您現在將被導向到電影大廳");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/crabtv");
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  return (
    <div>
      {/* 類型 */}
      <div className="flex justify-between p-2 bg-orange-300">
        <div className="flex justify-start">
          {/* <button className="w-20 h-5 bg-teal-200 mr-10">熱映中</button>
          <button className="w-20 h-5 bg-teal-200 mr-10">近期上映</button>
          <button className="w-20 h-5 bg-teal-200 mr-10">即將下映</button> */}
        </div>
        <button onClick={handlePatchSlide} className="btn btn-primary">把圖片放到前台Slide</button>
      </div>
      {/* 幻燈片 */}
      <div className="flex items-center justify-center p-2 bg-lime-500">
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
      </div>
      {/* 搜尋區 */}
      <div>
        <SearchTheme  currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
    </div>
  )
}
