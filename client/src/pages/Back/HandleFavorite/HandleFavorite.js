import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import Search from "../../../components/Search";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleFavorite({currentUser, setCurrentUser}) {
  let [message, setMessage] = useState("");
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [newCast, setNewCast] = useState("");
  const searchURL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=ja-JP&query=${input}&page=1`; 
  const navigate = useNavigate();
  const search2 = async(URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
  }
  const handleNewCast = (e) => {
    setNewCast(e.target.value);
  }
  const favoritePersonChange = async() => {
    try{  
      let favoritePerson = newCast;
      let response = await AuthService.patchFavoritePerson(currentUser.user._id, favoritePerson)
      window.alert("修改成功。您現在將被導向到電影大廳");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/crabtv")
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  return (
    <div>
      <Search search={() => {search2(searchURL);}} setInput={setInput} />
      <div className="d-flex justify-content-center">
        <span>結果</span>
        <select className="rent-day" onClick={handleNewCast}>
          <option>--請選擇--</option>
          { data && data.map((d) => {
              return (
                <option value={d.id}>{d.name}</option>
              )
            })
          }
        </select>
      </div>
      <div style={{display:"flex", justifyContent:"center"}} ><button onClick={favoritePersonChange}>FavoritePerson Change</button></div>
    </div>
  )
}
