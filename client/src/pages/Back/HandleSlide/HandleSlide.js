import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import Search from '../../../components/Search';
import axios from "axios";
import SlidePic from "../HandleSlide/SlidePic";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleSlide({currentUser, setCurrentUser}) {
  let [message, setMessage] = useState("");
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [slide, setSlide] = useState([]);
  let [page, setPage] =useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`;
  const navigate = useNavigate();
  const search = async(URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
  }
  const morePicture = async() => {
    let newURL;
    setPage(page + 1);
    if( currentSearch === ""){
      newURL = `https://api.themoviedb.org/3/tv/popular?language=ja-JP&page=${ page + 1 }&api_key=${API_KEY}`;
    } else {
      newURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=${ page + 1 }&include_adult=false`
    }
    let result = await axios.get(newURL);
    setData(data.concat(result.data.results));
  };

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
      <Search search={() => {search(searchURL);}} setInput={setInput} />
      <div className="d-flex justify-content-around">
        <button onClick={handlePatchSlide} className="btn btn-primary">把圖片放到前台Slide</button>
      </div>
      <div className="pictures">
        {
          data &&
          data.map((d) => {
            return <SlidePic slide={slide} setSlide={setSlide} data={d} currentUser={currentUser}/>
          })
        }
      </div>
      <div className="morePicture">
        <button onClick={ morePicture }>MORE</button>
      </div>
    </div>
  )
}
