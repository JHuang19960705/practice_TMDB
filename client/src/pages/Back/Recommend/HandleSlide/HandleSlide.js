import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SlidePic from "./SlidePic";
import AuthService from "../../../../services/auth.service";
import SlideTheme from "./SlideTheme";
import axios from "axios";
import "../../../../styles/handleSlide.css"
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleSlide({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  const [isOpen1, setIsOpen1] = useState(true);// 默认打开
  const [isOpen2, setIsOpen2] = useState(false);
  const [slide, setSlide] = useState([]);
  const [message, setMessage] = useState([]);
  const toggleOpen = (tabNumber) => {
    // 关闭所有标签页
    setIsOpen1(false);
    setIsOpen2(false);
    // 打开指定的标签页
    switch (tabNumber) {
      case 1:
        setIsOpen1(true);
        break;
      case 2:
        setIsOpen2(true);
        break;
      default:
        break;
    }
  };
  
  const handlePatchSlide = async() => {
    try{  
      let response = await AuthService.patchSlide(currentUser.user._id, slide)
      window.alert("修改成功。您現在將被導向到電影大廳");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  const [data, setData] = useState(false);
  const search = async(URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
  }
  const handleSortBy = async(e) => {
    let genreId = e.currentTarget.dataset.genreId;
    let genresURL = `https://api.themoviedb.org/3/discover/tv?with_origin_country=JP&api_key=${API_KEY}&with_genres=${genreId}`
    await search(genresURL);
  }

  return (
    <div>
      {/* 類型 */}
      <div className="flex justify-between p-2 bg-orange-300">
        <div className="flex justify-start">
          <button className="w-20 h-5 bg-teal-200 mr-10">目前</button>
          <button className="w-20 h-5 bg-teal-200 mr-10">修改</button>
          <button className="w-20 h-5 bg-teal-200 mr-10">編輯</button>
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
        <div className="slide-mian">
          <div className="slide-main-menu">
            <div className="text-lg text-white mt-5 mb-10 text-center">123</div>
            <ul>
              <button onClick={() => toggleOpen(1)} className="slide-nav-item active">
                <b></b>
                <b></b>
                <a href="#">
                  <span class="slide-nav-text">搜尋</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="35" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span class="slide-nav-text">喜劇片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="10759" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span className="slide-nav-text">動作片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="16" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span className="slide-nav-text">動畫片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="80" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span className="slide-nav-text">犯罪片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="99" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span className="slide-nav-text">紀錄片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="18" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span class="slide-nav-text">戲劇片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="10751" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span className="slide-nav-text">闔家片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="10762" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span className="slide-nav-text">兒童片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="9648" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span className="slide-nav-text">懸疑片</span>
                </a>
              </button>
              <button onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="10765" className="slide-nav-item">
                <b></b>
                <b></b>
                <a href="#">
                  <span className="slide-nav-text">科幻片</span>
                </a>
              </button>
            </ul>
          </div>
          <div>
            {isOpen1 && (
               <SlidePic currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            )}
            {isOpen2 && (
              data && data.map((d)=>{
                return (
                  <button className="p-3 w-full flex flex-col rounded-md dark:bg-gray-800 relative focus:outline-none">
                    <table className="w-full text-left">
                      <SlideTheme data={d} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                    </table>
                  </button>
                )     
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
