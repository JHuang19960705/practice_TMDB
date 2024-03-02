import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import AuthService from '../../../../services/auth.service';
import SearchTheme from '../SearchTheme/SearchTheme';
import CurrentTheater from '../Component/CurrentTheater';
import ChoosedImg from '../Component/ChooseImg';

export default function OnTime({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  const [message, setMessage] = useState([]);
  const [newOnTime, setNewOnTime] = useState([]);
  const handleTheater = async() => {
    try{  
      const updatedTheater = {
        releases: newOnTime.reduce((acc, cur) => {
          return [...acc, cur.onTime];
        }, [])
      };
      let response = await AuthService.patchTheaterReleases(currentUser.user._id, updatedTheater.releases)
      window.alert("修改成功~");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/back/yourTheater/onTime")
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  const deleteSlideImg = (e) => {
    const xxx = newOnTime.filter((not) => {
      return not.onTime !== e.currentTarget.dataset.tmdbId;
    })
    setNewOnTime(xxx)
  }
  return (
    <div>
      {/* 幻燈片 */}
      <div className="flex items-center justify-center p-2 ">
        {/* <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div> */}
         <CurrentTheater key={currentUser.user.theater.releases} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
      {/* 編輯區 */}
      <div className="flex justify-between items-center bg-slate-400">
        <div className="w-4/5 flex justify-start p-3 overflow-x-auto">
          {newOnTime && newOnTime.map((not)=>{
              return <ChoosedImg key={not} not={not} deleteSlideImg={deleteSlideImg} newOnTime={newOnTime} setNewOnTime={setNewOnTime}/> 
          })}
        </div>
        <div className="w-1/5 flex justify-center"><button onClick={handleTheater} className="btn btn-primary">把影片排進電影院</button></div>
      </div>
      {/* 搜尋區 */}
      <div>
        <SearchTheme  currentUser={currentUser} setCurrentUser={setCurrentUser} newOnTime={newOnTime} setNewOnTime={setNewOnTime}/>
      </div>
    </div>
  )
}
