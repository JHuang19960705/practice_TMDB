import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom"
import axios from 'axios';
import Search2 from '../../../components/Search2';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function SearchTV({ currentUser, setCurrentUser }) {
  let [movie, setMovie] = useState(null);
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] =useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const initialURL = `https://api.themoviedb.org/3/tv/popular?language=ja-JP&page=1&api_key=${API_KEY}`;
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
      newURL = `https://api.themoviedb.org/3/tv/popular?language=ja-JP&page=${ page + 1 }&api_key=${API_KEY}`;
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
    <div className="flex-grow flex overflow-x-hidden">
    {/* <!--   左內容   --> */}
    <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
      <div className="text-xs text-gray-400 tracking-wider">TV</div>
      <Search2 search={() => {search(searchURL);}} setInput={setInput} />
      <div className="space-y-4 mt-3">
        {
          data &&
          data.map((d) => {        
            return (
              <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                <div className="picture">
                  <p>{d.title}</p>
                  <Link to={`${d.id}`} onClick={handleChange} data-movie-id={d.id} className="imageContainer">
                    <img src={ tmdbBaseURL + d.poster_path} />
                   </Link>
                </div>
                { currentUser && currentUser.user.role !== "free" && (
                    <div className="member-button">
                      <Link to={`postTVContent/${d.id}`} onClick={handleChange} data-movie-id={d.id} className='reviews-writing'>
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
                    <Link to={`/reviews/${data.id}`} className='reviews-writing' target="_blank">
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
    <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
      <Outlet key={movie} />
    </div>
    </div>
  )
}
