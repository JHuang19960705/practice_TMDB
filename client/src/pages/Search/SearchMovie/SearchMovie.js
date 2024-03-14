import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom"
import axios from 'axios';
import Search2 from '../../../components/Search2';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function SearchMovie({ currentUser, setCurrentUser }) {
  let [movie, setMovie] = useState(null);
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] =useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const initialURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${`黑暗騎士`}&page=1&include_adult=false`;
  const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`;

  const search = async (URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
    setCurrentSearch(input);
  };

  useEffect(()=>{
    search(initialURL);
  }, [])

  const morePicture = async() => {
    let newURL;
    setPage(page + 1);
    if( currentSearch === ""){
      newURL = `https://api.themoviedb.org/3/movie/popular?language=ja-JP&page=${ page + 1 }&api_key=${API_KEY}`;
    } else {
      newURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=${ page + 1 }&include_adult=false`
    }
    let result = await axios.get(newURL);
    setData(data.concat(result.data.results));
  };

  const handleChange = (e) => {
    setMovie(e.currentTarget.dataset.movieId)
  }

  return (
    <div className="flex flex-grow overflow-x-hidden md:relative">
      {/* <!--   左內容   --> */}
      <div className="absolute top-0 h-full w-5/6 flex-shrink-0 -translate-x-[1000px] overflow-y-auto border-r border-gray-200 bg-gray-100 p-5 md:static md:block md:w-72 md:-translate-x-0 md:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 md:dark:bg-gray-900">
        {/* 手機板上Nav */}
        <div class="mb-4 flex h-12 w-full items-end justify-around md:hidden">
          <div class="flex flex-grow justify-center truncate border-b-2 border-gray-900 dark:border-gray-100 dark:text-gray-100">Reviews</div>
          <div class="flex flex-grow justify-center truncate dark:text-gray-100">Recommend</div>
          <div class="flex flex-grow justify-center truncate dark:text-gray-100">Theater</div>
        </div>
        {/* 左Nav */}
        <div className="text-xs text-gray-400 tracking-wider">Movie</div>
        <Search2 search={() => {search(searchURL);}} setInput={setInput} />
        <div className="space-y-4 mt-3">
          {
            data &&
            data.map((d) => {        
              return (
                <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                  <div className="w-full">
                    <p className="truncate">{d.title}</p>
                    <Link to={`${d.id}`} onClick={handleChange} data-movie-id={d.id} className="imageContainer">
                      <img src={ tmdbBaseURL + d.poster_path} />
                    </Link>
                  </div>
                  { currentUser && currentUser.user.role !== "free" && (
                      <div className="member-button">
                        <Link to={`postMovieContent/${d.id}`} onClick={handleChange} data-movie-id={d.id} className='reviews-writing'>
                          寫影評
                        </Link>
                        <Link to={`reviews/${d.id}`} onClick={handleChange} data-movie-id={d.id} className='reviews-writing'>
                          看影評
                        </Link>
                      </div>
                    )
                  }
                  { currentUser && currentUser.user.role == "free" && (
                    <div className="member-button">
                      <Link to={`reviews/${d.id}`} onClick={handleChange} data-movie-id={d.id} className='reviews-writing'>
                        看影評
                      </Link>
                    </div>
                    )
                  }
                </button>
              )
            })
          }
        </div>
        <div className="morePicture">
          <button onClick={ morePicture }>MORE</button>
        </div>
      </div>
      {/* <!--    右內容    --> */}
      <div className="h-full flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <Outlet key={movie} />
      </div>
    </div>
  )
}
