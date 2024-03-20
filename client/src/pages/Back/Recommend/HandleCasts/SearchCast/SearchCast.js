import React, { useState } from 'react'
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function SearchCast({setNewCast, handleChangeClose1, handleChangeOpen2}) {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const searchURL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=ja-JP&query=${input}&page=1`; 

  //搜尋角色
  const search = async(URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
  }

  const inputHandler = (e) => {
    setInput(e.target.value);
  }
  
  return (
    <div className="bg-white p-10 rounded-xl shadow-md absolute h-3/5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 z-10 flex flex-col">
      <div className="flex justify-end">
        <button onClick={handleChangeClose1} className="bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4 rounded">返回</button>
      </div>
      <div className="relative mt-2">
        <input onChange={inputHandler} type="text" className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search"/>
        <button onClick={()=>search(searchURL)}>
          <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-4 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <div className="overflow-auto mt-10">
        <table className="w-full text-left table-fixed bg-white">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="text-gray-400 hidden md:table-row">
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">名字</th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">照片</th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">職業</th>
              <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-500">
            { 
              data && data.map((d)=>{
                if(d.name && d.profile_path && d.known_for_department ) {
                return (              
                  <tr className="hidden md:table-row">
                    <td className="sm:p-3 py-2 px-1 w-1/4 border-b border-gray-200 dark:border-gray-800">
                      <div className="flex items-center truncate">{d.name}</div>
                    </td>
                    <td className="sm:p-3 py-2 px-1 w-1/4 border-b border-gray-200 dark:border-gray-800">
                      <div className="flex items-center">
                        <a className="imageContainer">
                          <img className="w-20" src={tmdbBaseURL + d.profile_path}/>
                        </a>
                      </div>
                    </td>
                    <td className="sm:p-3 py-2 px-1 w-1/4 border-b border-gray-200 dark:border-gray-800">
                      {d.known_for_department}
                    </td>
                    <td className="sm:p-3 py-2 px-1 w-1/4 border-b border-gray-200 dark:border-gray-800">
                      <div className="flex items-center">
                        <button onClick={() => {handleChangeOpen2();setNewCast({ id: d.id, name: d.name })}} data-tmdb-id={d.id} data-tmdb-img={d.profile_path} className="mt-5 heading rounded-md bg-green-500 px-3 py-1 text-white">
                          選取slide
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
            })}
            {
              data && data.map((d)=>{
                if(d.name && d.profile_path && d.known_for_department ) {
                return (
                  <div className="mb-5 flex justify-around items-center border-b border-grey-dark pb-5 md:hidden">
                    <div className="w-1/3">
                      <div className="aspect-w-1 aspect-h-1 w-full">
                        <img src={tmdbBaseURL + d.profile_path} alt={d.name} className="bg-white text-gray-700 hover:bg-gray-100 py-1 px-2 rounded-sm text-sm object-cover"/>
                      </div>
                    </div>
                    <div className="pl-4">
                      <div className="w-[150px] mt-2 text-base font-bold text-secondary truncate ">{d.name}</div>
                      <div className="block font-hk text-secondary">{d.known_for_department}</div>
                      <div>
                        <button onClick={() => {handleChangeOpen2();setNewCast({ id: d.id, name: d.name })}} data-tmdb-id={d.id} data-tmdb-img={d.profile_path} className="mt-5 heading rounded-md bg-green-500 px-3 py-1 text-white">
                          選取slide
                        </button>
                      </div>
                    </div>
                  </div>
              )}
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
