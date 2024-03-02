import React, { useState, useEffect } from "react";
import Cast from "../../../../components/Charactor/Cast";
import Search from "../../../../components/Search2";
import axios from "axios";
import "../../../../styles/celebrity-index.css";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleCasts({currentUser, setCurrentUser}) {
  const [isLoading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [cast, setCast] = useState("");
  const [newCast, setNewCast] = useState("");
  useEffect(() => {
    setLoading(false);
    setCast(currentUser.user.cast)
  },[])
  //搜尋角色
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  const searchURL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=ja-JP&query=${input}&page=1`; 
  const search2 = async(URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
  }
  const handleNewCast = (e) => {
    setNewCast(e.target.value);
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
