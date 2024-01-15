import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
// import BestChooseFn from '../jseffect/BestChooseFn';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;
const person_id = "87661"
const personTVURL = `https://api.themoviedb.org/3/person/${person_id}/tv_credits?page=1&api_key=${API_KEY}`;
const personDetailURL = `https://api.themoviedb.org/3/person/${person_id}?api_key=${API_KEY}`;

function BestChoose() {
  let [personTV, setPersonTV] = useState(null);
  let [personDetail, setPersonDetail] = useState(null);
  let result1;
  let result2;
  const searchAll = async(URL1, URL2) => {
    result1 = await axios.get(URL1);
    setPersonTV(result1.data.crew);
    result2 = await axios.get(URL2);
    setPersonDetail(result2.data);
  }

  useEffect(()=>{
    searchAll(personTVURL, personDetailURL);
  }, [])

  // window.onload = function(){
  //   BestChooseFn();
  // }

  // setTimeout(() => {
  //   BestChooseFn();
  // }, 1000);

  return (
    <div className="best-wrap">
    <div className="best">
        <div className="best-up">
            <div className="best-title"><p>{ personDetail && personDetail.also_known_as[0] }作品精選</p></div>
            <div className="best-subtitle"><p>{ personDetail && personDetail.also_known_as[1] }</p></div>
            <div className="best-logline">
                <p>{ personDetail && personDetail.biography }</p>
            </div>
        </div>
        <div className="best-down">
            <div className="best-pic-wrap js-best-pic-wrap">
                { 
                  personTV && 
                  personTV.slice(0, 20).map((TV) => {
                    return (
                      <Link to={`/movie/${TV.id}`} target="_blank">
                        <img src={tmdbBaseURL + TV.backdrop_path} alt="" draggable="false"/>
                        <Outlet />
                      </Link>
                    )
                  })
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default BestChoose