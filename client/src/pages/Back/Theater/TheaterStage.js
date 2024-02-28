import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

export default function TheaterStage({theater, setTheater, currentUser, setCurrentUser}) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleTheater = async() => {
    try{  
      let response = await AuthService.patchTheater(currentUser.user._id, theater)
      window.alert("修改成功~");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/shopping")
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  const deleteTheater = (e) => {
    const newTheater = {
      releases: theater.releases.filter((t) => (t != e.currentTarget.dataset.tmdbid)),
      leaving: theater.leaving.filter((t) => (t != e.currentTarget.dataset.tmdbid)),
      upcoming: theater.upcoming.filter((t) => (t != e.currentTarget.dataset.tmdbid))
  }
  setTheater(newTheater);
  }
  return (
    <div style={{width:"60%", height:"200px", border:"3px solid black", display: "flex", justifyContent:"space-around", flexDirection:"column" }}>
      <div style={{display: "flex"}}>
        <li>上映電影</li>
        {
          theater.releases &&
          theater.releases.map((id) => {
            return <p onClick={deleteTheater} className="btn btn-secondary" data-tmdbid={id} >{id}</p>
          })
        }
      </div>
      <div style={{display: "flex"}}>
        <li>準備下檔電影</li>
        {
          theater.leaving &&
          theater.leaving.map((id) => {
            return <p onClick={deleteTheater} className="btn btn-secondary" data-tmdbid={id} >{id}</p>
          })
        }
      </div>
      <div style={{display: "flex"}}>
        <li>下個月上映電影</li>
        {
          theater.upcoming &&
          theater.upcoming.map((id) => {
            return <p onClick={deleteTheater} className="btn btn-secondary" data-tmdbid={id} >{id}</p>
          })
        }
      </div>
      <button onClick={handleTheater} style={{width:"20%", margin:"0 auto"}}>送出</button>
    </div>
  )
}
