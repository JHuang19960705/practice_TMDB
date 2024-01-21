import React, { useState, useEffect } from "react";
import Cast from "../../components/Charactor/Cast";
import axios from "axios";
import "../../styles/celebrity-index.css";
import Search from "../../components/Search";
import FavoritePerson from "./FavoritePerson";
const API_KEY = process.env.REACT_APP_API_KEY;


export default function CharacterAll({currentUser, setCurrentUser}) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    setCast(currentUser.user.cast)
  },[])
  //搜尋角色
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [cast, setCast] = useState("");
  let [newCast, setNewCast] = useState("");
  const searchURL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=ja-JP&query=${input}&page=1`; 
  const search2 = async(URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
  }
  const handleNewCast = (e) => {
    setNewCast(e.target.value);
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
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
      <div className="d-flex justify-content-center" style={{marginTop: "100px"}}>
        <FavoritePerson newCast={newCast} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
      <section className="archive js-celebrities-wrap" >
        { <div>
            <Cast castId={currentUser.user.cast.cast1} cast={cast} newCast={newCast} currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Cast castId={currentUser.user.cast.cast2} cast={cast} newCast={newCast} currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Cast castId={currentUser.user.cast.cast3} cast={cast} newCast={newCast} currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Cast castId={currentUser.user.cast.cast4} cast={cast} newCast={newCast} currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </div>  
        }
      </section>
    </div>
  )
}
