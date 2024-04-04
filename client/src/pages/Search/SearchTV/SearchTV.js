import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import Search from "../../../components/Search";

const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function SearchTV({ currentUser }) {
  const [tv, setTV] = useState(null); // 儲存用戶點擊的影集ID
  const [input, setInput] = useState(""); // 儲存用戶輸入的搜尋關鍵字
  const [data, setData] = useState(null); // 儲存搜尋結果的影集資料
  const [page, setPage] = useState(1); // 儲存當前頁碼
  const [currentSearch, setCurrentSearch] = useState(""); // 儲存當前搜尋關鍵字
  const [clickTitle, setClickTitle] = useState(null); // 儲存用戶點擊的影集標題
  const [isHidden, setIsHidden] = useState("hidden"); // 控制手機板導覽的顯示與隱藏
  const [isDisplay, setIsDisplay] = useState(null); // 控制手機板導覽的顯示與隱藏
  const initialURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${`絕命`}&page=1&include_adult=false`; // 初始搜尋URL，預設搜尋關鍵字為"絕命"
  const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`; // 搜尋URL，根據用戶輸入的關鍵字動態生成
  
  // 點擊影集標題時的處理函數
  const handleClickTitle = (title) => {
    setClickTitle(title);
    setIsHidden(null);
    setIsDisplay("hidden");
  }
  
  // 控制手機板導覽顯示與隱藏的處理函數
  const handleNavDisplay = () => {
    setIsDisplay(null);
    setClickTitle(null);
    setIsHidden("hidden");
  }

  // 搜尋影集的函數，向TMDB API發送請求並更新搜尋結果資料
  const search = async (URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
    setCurrentSearch(input);
  };

  // 初始加載時進行一次搜尋
  useEffect(() => {
    search(initialURL);
  }, [])

  // 點擊“更多”按鈕時加載更多搜尋結果的函數
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.themoviedb.org/3/tv/popular?language=ja-JP&page=${page + 1}&api_key=${API_KEY}`;
    } else {
      newURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=${page + 1}&include_adult=false`
    }
    let result = await axios.get(newURL);
    setData(data.concat(result.data.results));
  };

  // 點擊影集時更新選擇的影集ID
  const handleChange = (id) => {
    setTV(id);
  }

  return (
    <div className="flex flex-col flex-grow overflow-x-hidden mb-10 md:mb-0">
      {/* 手機板返回導覽 */}
      <div className={`pt-2 flex w-full items-center justify-right md:hidden ${isHidden}`}>
        <div className="cursor-pointer" onClick={handleNavDisplay}>
          <svg className="w-6 mx-1 text-gray-700 transform dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div>{clickTitle}</div>
      </div>
      <div className="flex flex-grow overflow-x-hidden md:relative">
        {/* <!--   左導覽   --> */}
        <div className={`${isDisplay} w-full flex-shrink-0 overflow-y-auto border-r border-gray-200 bg-gray-100 p-5 md:static md:block md:w-1/4 md:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 md:dark:bg-gray-900`}>
          <Search search={() => { search(searchURL); }} setInput={setInput} />
          <div className="space-y-4 mt-3">
            {
              data &&
              data.map((d) => {
                if (d.original_name && d.origin_country && d.backdrop_path) {
                  return (
                    <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                      <div className="w-full">
                        <p className="truncate pb-2">{d.original_name}</p>
                        <Link to={`${d.id}`} onClick={() => { handleChange(d.id); handleClickTitle(d.original_name) }}>
                          <img src={tmdbBaseURL + d.poster_path} />
                        </Link>
                      </div>
                      {currentUser && currentUser.user.role !== "free" && (
                        <div className="w-full flex justify-around text-base text-gray-400 pt-3">
                          <Link to={`postTVContent/${d.id}`} onClick={() => { handleChange(d.id); handleClickTitle(d.original_name) }} className="border-b border-transparent hover:text-gray-800 hover:border-b hover:border-gray-800 dark:hover:border-gray-300 dark:hover:text-gray-300">
                            寫影評
                          </Link>
                          <Link to={`reviews/${d.id}`} onClick={() => { handleChange(d.id); handleClickTitle(d.original_name) }} className="border-b border-transparent hover:text-gray-800 hover:border-b hover:border-gray-800 dark:hover:border-gray-300 dark:hover:text-gray-300">
                            看影評
                          </Link>
                        </div>
                      )
                      }
                      {currentUser && currentUser.user.role == "free" && (
                        <div className="w-full flex justify-around text-base text-gray-400 pt-3">
                          <Link to={`reviews/${d.id}`} onClick={() => { handleChange(d.id); handleClickTitle(d.original_name) }} className="border-b border-transparent hover:text-gray-800 hover:border-b hover:border-gray-800 dark:hover:border-gray-300 dark:hover:text-gray-300">
                            看影評
                          </Link>
                        </div>
                      )
                      }
                    </button>
                  )
                }
              })
            }
          </div>
          <div className="flex justify-center pt-5">
            <button onClick={morePicture} className="h-8 px-3 rounded-md shadow text-white bg-blue-500">MORE</button>
          </div>
        </div>
        {/* <!--    右內容    --> */}
        <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          {!tv && <div className="flex justify-center text-center md:text-2xl md:pt-32">選擇一部影集、寫影評、看影評</div>}
          <Outlet key={tv} />
        </div>
      </div>
    </div>
  )
}
