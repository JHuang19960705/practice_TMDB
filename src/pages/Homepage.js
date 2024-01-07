import React, { useState, useEffect } from 'react'
import Search from "../components/Search";
import axios from 'axios';
import Picture from '../components/Picture';

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] =useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const initialURL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}&region=JP`;
  const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`;

  const search = async (URL) => {
    let result = await axios.get(URL);
    setData(result.data.results);
    setCurrentSearch(input);
  };

  useEffect(()=>{
    search(initialURL);
  }, [])
  //會有closure的問題
  const morePicture = async() => {
    let newURL;
    setPage(page + 1);
    if( currentSearch === ""){
      newURL = `https://api.themoviedb.org/3/movie/now_playing?language=ja-JP&page=${ page + 1 }&api_key=${API_KEY}&region=JP`;
    } else {
      newURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=${ page + 1 }&include_adult=false`
    }
    let result = await axios.get(newURL);
    setData(data.concat(result.data.results));
  };

  return (
    <div>
      Welcome My Home
      <Search
        // search={search} 
        search={() => {
          search(searchURL);
        }} 
        setInput={setInput} 
      />
      <div className="pictures">
        {
          data &&
          data.map((d) => {
            return <Picture data={d}/>
          })
        }
      </div>
      <div className="morePicture">
        <button 
        onClick={ morePicture }
          >＞MORE＜
        </button>
      </div>
    </div>
  )
}

export default Homepage;