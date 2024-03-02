import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import AuthService from "../../services/auth.service";
const API_KEY = process.env.REACT_APP_API_KEY;
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Cast({ castId , cast, newCast, currentUser, setCurrentUser}) {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const [message, setMessage] = useState("");
  const characterURL = `https://api.themoviedb.org/3/person/${castId}?api_key=${API_KEY}`;

  const search = async(url) => {
    let result = await axios.get(url);
    setCharacter(result.data);
    setLoading(false);
  }

  useEffect(()=>{
    search(characterURL);
  }, [])

  const handleChangeCast = () => {
    if (cast.cast1 == castId){
      cast.cast1 = newCast;
      ChangeServerCast();
    } else if (cast.cast2 == castId) {
      cast.cast2 = newCast;
      ChangeServerCast();
    } else if (cast.cast3 == castId) {
      cast.cast3 = newCast;
      ChangeServerCast();
    } else if (cast.cast4 == castId) {
      cast.cast4 = newCast;
      ChangeServerCast();
    }
  }

  const ChangeServerCast = async() => {
    try{  
      let response = await AuthService.patchCast(currentUser.user._id, cast)
      window.alert("修改成功。您現在將被導向到個人資料頁面");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      castId = newCast;
      const newCastURL = `https://api.themoviedb.org/3/person/${castId}?api_key=${API_KEY}`;
      let result1 = await axios.get(newCastURL);
      setCharacter(result1.data);
    } catch (e) {
      setMessage(e.response.data);
    };
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <h2 className="archive_label f-serif">CHARACHER</h2> 
      <button onClick={handleChangeCast} className='btn btn-success btn-sm'>修改</button>
      <div className="archive_item">
        <h2 className="archive_heading">CHARACHER</h2>
        <div className="archive_index">
          <div className="num f-serif"></div>
          <div className="heading">人物</div>
        </div>
        <div className="archive_content">
          {/* <!-- 大圖 --> */}
          <div className="archive_col1">
            <div className="js-celebrity-click" datacelebrityid={character.id}>
              <Link to={`/character/${character.id}`} target="_blank">
                <img className="archive_kv " src={tmdbBaseURL + character.profile_path} />
              </Link>
              <Outlet />
            </div>
            {/* <!-- 大標題 --> */}
            <h3 className="archive_title">
              <div className="jp">{character.name}</div>
              <div className="year f-serif">{character.also_known_as[2]}</div>
            </h3>      
            {/* <!-- 內文 --> */}
            <p className="archive_description">
            {character.biography}
            </p>
          </div>
          {/* <!-- 小圖 --> */}
          <div className="archive_col2 js-celebrity-click" >
            {/* <img src="${celebrity.event[1].img}" data-cast-id="${celebrity.id}"/> */}
          </div>
        </div>
      </div>
    </div>
  )
}
