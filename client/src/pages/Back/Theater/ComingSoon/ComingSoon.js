import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import AuthService from '../../../../services/auth.service';
import axios from "axios";
import CurrentTheater from './CurrentTheater/CurrentTheater';
import ChoosedImg from '../Component/ChooseImg';
import Search2 from '../../../../components/Search2';
import SlideAfterSearch from '../Component/SlideAfterSearch';
import "../../../../styles/handleSlide.css"
const API_KEY = process.env.REACT_APP_API_KEY;

export default function ComingSoon({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  const [message, setMessage] = useState([]);
  const [newOnTime, setNewOnTime] = useState([]);
  const [data, setData] = useState(false);
  const [input, setInput] = useState("");
  const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`;
  
  const handleNewSlide = (newOnTimeBackdrop, newOnTimePoster) => {
    const existingSlide = newOnTime.find(slide => slide.slideBackdrop === newOnTimeBackdrop && slide.slidePoster === newOnTimePoster);
    if (existingSlide) {
      window.alert(`已經選過囉~`);
    } else {
      setNewOnTime([...newOnTime, { slideBackdrop: newOnTimeBackdrop, slidePoster: newOnTimePoster }]);
    }
  }

  const handleTheater = async() => {
    try{  
      const tmdbImgBackdrop = newOnTime.reduce((acc, cur) => {
        return [...acc, cur.slideBackdrop];
      }, []);
      const tmdbImgPoster = newOnTime.reduce((acc, cur) => {
        return [...acc, cur.slidePoster];
      }, []);
      const updatedTheater = {upcoming : {tmdbImgBackdrop, tmdbImgPoster}}

      let response = await AuthService.patchTheaterUpcoming(currentUser.user._id, updatedTheater.upcoming)
      window.alert("修改成功~");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate(0)
    } catch (e) {
      setMessage(e.response.data);
    };
  }

  const deleteSlideImg = (choosedDeleteImg) => {
    setNewOnTime(newOnTime.filter((not) => {
      return not.slideBackdrop !== choosedDeleteImg.slideBackdrop;
    }))
    
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

  useEffect(() => {
    const updatedSlides = [];
    if(currentUser.user.theater.upcoming.tmdbImgBackdrop) {
      for(let i = 0; i < currentUser.user.theater.upcoming.tmdbImgBackdrop.length; i++) {
          updatedSlides.push({ 
              slideBackdrop: currentUser.user.theater.upcoming.tmdbImgBackdrop[i], 
              slidePoster: currentUser.user.theater.upcoming.tmdbImgPoster[i] 
          });
      }
    }
    setNewOnTime(updatedSlides);
}, [currentUser]);

  return (
  <div className="px-8">
    {/* 目前幻燈片 */}
    <div className="flex items-center justify-center p-2"> 
      <CurrentTheater key={currentUser} currentUser={currentUser} />
    </div>
    {/* 編輯區 */}
    <div className="mb-8">
      <div class="mb-2 text-sm font-medium">待上傳區</div>
      <div className="mb-4">
        <div className="flex h-[200px] w-full items-center justify-between overflow-x-auto rounded-xl border-2 border-dashed border-blue-200">
          <div className="flex">
            {newOnTime && newOnTime.map((not)=>{
                return <ChoosedImg slide={not} deleteSlideImg={deleteSlideImg} /> 
            })}
          </div>
        </div>
      </div>
      <div class="mb-2 flex justify-center px-4">
          <div onClick={handleTheater} class="cursor-pointer flex w-52 items-center justify-center rounded-3xl bg-blue-50 px-1 py-2 text-blue-500">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform cursor-pointer text-blue-500 transition duration-300 hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19V5M5 12l7-7 7 7"></path>
              </svg>
            </div>
            <button>上傳</button>
          </div>
        </div>
    </div>     
    {/* 搜尋區 */}
    <div>
      <div className="slide-mian">
        {/* 左邊 */}
        <div className="slide-main-menu">
          {/* logo */}
          <div className="mt-7 mb-8 text-center flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-950" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke-width="2" />
              <path d="M8 21h8M12 17v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          {/* 按鈕 */}
          <ul>
            <li onClick={() => setData(null)} className="slide-nav-item active">
              <b></b>
              <b></b>
              <a href="#">
                <span class="slide-nav-text">搜尋</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="35" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span class="slide-nav-text">喜劇片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="10759" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span className="slide-nav-text">動作片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="16" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span className="slide-nav-text">動畫片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="80" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span className="slide-nav-text">犯罪片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="99" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span className="slide-nav-text">紀錄片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="18" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span class="slide-nav-text">戲劇片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="10751" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span className="slide-nav-text">闔家片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="10762" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span className="slide-nav-text">兒童片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="9648" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span className="slide-nav-text">懸疑片</span>
              </a>
            </li>
            <li onClick={(e) => {handleSortBy(e)}} data-genre-id="10765" className="slide-nav-item">
              <b></b>
              <b></b>
              <a href="#">
                <span className="slide-nav-text">科幻片</span>
              </a>
            </li>
          </ul>
        </div>
        {/* 右邊 */}
        <div>
          <div className="relative mt-2" >
            <Search2 search={() => {search(searchURL);}} setInput={setInput} />
          </div>
          <button className="p-3 w-full flex flex-col rounded-md dark:bg-gray-800 relative focus:outline-none">
            <table className="w-full text-left">
              <thead class="sticky top-0 bg-white z-10">
                <tr class="text-gray-400 hidden md:table-row">
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">片名</th>
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">海報</th>
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">上映</th>
                  <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"></th>
                </tr>
              </thead>
              { data && data.map((d) => { 
                    if (d.poster_path && d.backdrop_path) {
                      return (
                        <SlideAfterSearch data={d} handleNewSlide={handleNewSlide} />
                    )}
                })}  
            </table>
            <div className="flex w-full mt-5 space-x-2 justify-end">
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">1</button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">2</button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">3</button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">4</button>
              <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
