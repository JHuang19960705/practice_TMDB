import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchPic from "./SearchPic";
import AuthService from "../../../../services/auth.service";
import SlideAfterSearch from "./SlideAfterSearch";
import axios from "axios";
import "../../../../styles/handleSlide.css"
import CurrentSlide from "./CurrentSlide/CurrentSlide";
import ChoosedImg from "./ChoosedImg/ChoosedImg";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleSlide({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  const [isOpen1, setIsOpen1] = useState(true);// 默认打开
  const [isOpen2, setIsOpen2] = useState(false);
  const [newSlide, setNewSlide] = useState([]);
  const [data, setData] = useState(false);
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
      const allNewSlide = newSlide.reduce((acc, cur) => {
        return [...acc, cur.slide];
      }, []);
      let response = await AuthService.patchSlide(currentUser.user._id, allNewSlide)
      window.alert("修改成功。您現在將被導向到電影大廳");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/back/yourRecommend/handleSlide");
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  const search = async(URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
  }
  const handleSortBy = async(e) => {
    let genreId = e.currentTarget.dataset.genreId;
    let genresURL = `https://api.themoviedb.org/3/discover/tv?with_origin_country=JP&api_key=${API_KEY}&with_genres=${genreId}`
    await search(genresURL);
  }
  const deleteSlideImg = (e) => {
    const xxx = newSlide.filter((s) => {
      return s.slide !== e.currentTarget.dataset.tmdbId;
    })
    setNewSlide(xxx)
  }

  return (
    <div>
      {/* 目前幻燈片 */}
      <div className="flex items-center justify-center p-2">
        {/* <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div>
        <div className="w-40 h-10 bg-neutral-300 mr-10"></div> */}
        <CurrentSlide key={currentUser} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
      {/* 編輯區 */}
      <div className="flex justify-between items-center bg-slate-400">
        <div className="w-4/5 flex justify-start p-3 overflow-x-auto">
          {newSlide && newSlide.map((ns)=>{
              return <ChoosedImg key={ns} ns={ns} deleteSlideImg={deleteSlideImg} newSlide={newSlide} setNewSlide={setNewSlide}/> 
          })}
        </div>
        <div className="w-1/5 flex justify-center"><button onClick={handlePatchSlide} className="btn btn-primary">把圖片放到前台Slide</button></div>
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
              <SearchPic currentUser={currentUser} setCurrentUser={setCurrentUser} newSlide={newSlide} setNewSlide={setNewSlide} />
            )}
            {isOpen2 && (
              data && data.map((d)=>{
                return (
                  <button className="p-3 w-full flex flex-col rounded-md dark:bg-gray-800 relative focus:outline-none">
                    <table className="w-full text-left">
                      <SlideAfterSearch data={d} currentUser={currentUser} setCurrentUser={setCurrentUser} newSlide={newSlide} setNewSlide={setNewSlide} />
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
