import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";

export default function HandleTheme({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [newTheme, setNewTheme] = useState([]);
  const changeTheme = (e) => {
    if (newTheme[0]){
      if(!newTheme.includes(e.currentTarget.dataset.genreId)){
        setNewTheme([...newTheme, e.currentTarget.dataset.genreId]);
      } 
    }else{
      setNewTheme([...newTheme, e.currentTarget.dataset.genreId]);
    }
  }
  const deleteTheme = (e) => {
    setNewTheme(newTheme.filter(t => t !== e.currentTarget.dataset.genreId))
  }
  const patchTheme = async() => {
    try{  
    let response = await AuthService.patchTheme(currentUser.user._id, newTheme)
    window.alert("主題修改成功。您現在將被導向到電影大廳");
    localStorage.setItem("user", JSON.stringify(response.data));
    setCurrentUser(AuthService.getCurrentUser());
    navigate("/crabtv");
    } catch (e) {
      setMessage(e.response.data);
    };

  }
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexDirection:"column", height:"500px" }}>
      <div>
        <button onClick={changeTheme} data-genre-id="35" className="btn btn-success">喜劇片</button>
        <button onClick={changeTheme} data-genre-id="10759" className="btn btn-success">動作片</button>
        <button onClick={changeTheme} data-genre-id="16" className="btn btn-success">動畫片</button>
        <button onClick={changeTheme} data-genre-id="80" className="btn btn-success">犯罪片</button>
        <button onClick={changeTheme} data-genre-id="99" className="btn btn-success">紀錄片</button>
        <button onClick={changeTheme} data-genre-id="18" className="btn btn-success">戲劇片</button>
        <button onClick={changeTheme} data-genre-id="10751" className="btn btn-success">闔家片</button>
        <button onClick={changeTheme} data-genre-id="10762" className="btn btn-success">兒童片</button>
        <button onClick={changeTheme} data-genre-id="9648" className="btn btn-success">懸疑片</button>
        <button onClick={changeTheme} data-genre-id="10765" className="btn btn-success">科幻片</button>
      </div>
      <div>
        <span>放到前台標籤=＞</span>
        { newTheme && 
          newTheme.map((nt) => {
            return <button onClick={deleteTheme} className="btn btn-success" data-genre-id={nt}>{nt}</button>
          }) 
        }
      </div>
      <div><button onClick={patchTheme}>確認</button></div>
    </div>
  )
}
