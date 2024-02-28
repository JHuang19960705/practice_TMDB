import React, { useState, useEffect } from "react";
// import TheaterButton from './TheaterButton';
// import TheaterPic from "./TheaterPic";
// import TheaterStage from "./TheaterStage";
// import axios from "axios";
// import SlidePic from "../Recommend/HandleSlide/SlidePic";
// import SlideTheme from "../Recommend/HandleSlide/SlideTheme";
// import SearchTheme from "./SearchTheme/SearchTheme";
import "../../../styles/handleSlide.css"
import { Link, Outlet } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function HandleTheater({currentUser, setCurrentUser}) {
  const [display, setDisplay] = useState("none");
  const [movie, setMovie] = useState(null);
  const [theater, setTheater ] = useState({
    releases: [],
    leaving: [],
    upcoming: []
  });
  

  return (
    // <div style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column" }}>
    //   <TheaterStage theater={theater} setTheater={setTheater} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    //   <div>
    //     <button onClick={handleSortBy} data-genre-id="35" className="btn btn-success">喜劇片</button>
    //     <button onClick={handleSortBy} data-genre-id="10759" className="btn btn-success">動作片</button>
    //     <button onClick={handleSortBy} data-genre-id="16" className="btn btn-success">動畫片</button>
    //     <button onClick={handleSortBy} data-genre-id="80" className="btn btn-success">犯罪片</button>
    //     <button onClick={handleSortBy} data-genre-id="99" className="btn btn-success">紀錄片</button>
    //     <button onClick={handleSortBy} data-genre-id="18" className="btn btn-success">戲劇片</button>
    //     <button onClick={handleSortBy} data-genre-id="10751" className="btn btn-success">闔家片</button>
    //     <button onClick={handleSortBy} data-genre-id="10762" className="btn btn-success">兒童片</button>
    //     <button onClick={handleSortBy} data-genre-id="9648" className="btn btn-success">懸疑片</button>
    //     <button onClick={handleSortBy} data-genre-id="10765" className="btn btn-success">科幻片</button>
    //   </div>
    //   <div className="pictures">
    //     {
    //       genresId &&
    //       genresId.map((g) => {
    //         return <TheaterPic data={g} currentUser={currentUser} display={display} setDisplay={setDisplay} setMovie={setMovie}/>
    //       })
    //     }
    //   </div>
    //   <TheaterButton theater={theater} currentUser={currentUser} setCurrentUser={setCurrentUser} display={display} setDisplay={setDisplay} movie={movie} setMovie={setMovie} />
    // </div>
    <div className="flex-grow flex overflow-x-hidden">
      {/* 左導覽 */}
      <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
        <div className="space-y-4 mt-3">
          <Link to="onTime" className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">熱映中</div>
          </Link>
          <Link to="comingSoon" className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">近期上映</div>
          </Link>
          <Link to="leavingSoon" className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">即將下映</div>
          </Link>
        </div>
      </div>
      {/* 右內容 */}
      <Outlet />
    </div>
  )
}
