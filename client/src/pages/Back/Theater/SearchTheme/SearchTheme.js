import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../../styles/handleSlide.css"
import SlideAfterSearch from "../Component/SlideAfterSearch";
import TheaterPic from "../Component/TheaterPic";
import SearchPic from "../Component/SearchPic";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function SearchTheme({currentUser, setCurrentUser, newOnTime, setNewOnTime}) {
  const navigate = useNavigate();
  const [isOpen1, setIsOpen1] = useState(true);// 默认打开
  const [isOpen2, setIsOpen2] = useState(false);
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
    <div className="slide-mian">
      <div className="slide-main-menu">
        <div className="text-lg text-white mt-5 mb-10 text-center">123</div>
        <ul>
          <li onClick={() => toggleOpen(1)} className="slide-nav-item active">
            <b></b>
            <b></b>
            <a href="#">
              <span class="slide-nav-text">搜尋</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="35" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span class="slide-nav-text">喜劇片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="10759" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span className="slide-nav-text">動作片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="16" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span className="slide-nav-text">動畫片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="80" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span className="slide-nav-text">犯罪片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="99" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span className="slide-nav-text">紀錄片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="18" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span class="slide-nav-text">戲劇片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="10751" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span className="slide-nav-text">闔家片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="10762" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span className="slide-nav-text">兒童片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="9648" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span className="slide-nav-text">懸疑片</span>
            </a>
          </li>
          <li onClick={(e) => {toggleOpen(2);handleSortBy(e)}} data-genre-id="10765" className="slide-nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <span className="slide-nav-text">科幻片</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        {isOpen1 && (
          <SearchPic currentUser={currentUser} setCurrentUser={setCurrentUser} newOnTime={newOnTime} setNewOnTime={setNewOnTime}/>
        )}
        {isOpen2 && (
          data && data.map((d)=>{
            return (
              <button className="p-3 w-full flex flex-col rounded-md dark:bg-gray-800 relative focus:outline-none">
                <table className="w-full text-left">
                  <SlideAfterSearch data={d} currentUser={currentUser} setCurrentUser={setCurrentUser} newOnTime={newOnTime} setNewOnTime={setNewOnTime}/>
                </table>
              </button>
            )     
          })
        )}
      </div>
  </div>
  )
}
