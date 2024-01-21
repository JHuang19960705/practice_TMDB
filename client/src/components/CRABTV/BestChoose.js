import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
// import BestChooseFn from '../jseffect/BestChooseFn';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function BestChoose({currentUser}) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [isLoading, setLoading] = useState(true);
  const [personTV, setPersonTV] = useState(null);
  const [personDetail, setPersonDetail] = useState(null);
  const personTVURL = `https://api.themoviedb.org/3/person/${currentUser.user.favoritePerson}/tv_credits?&api_key=${API_KEY}`;
  const personDetailURL = `https://api.themoviedb.org/3/person/${currentUser.user.favoritePerson}?api_key=${API_KEY}`;
  const searchAll = async(URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2);
    setPersonTV(result1.data.cast);
    setPersonDetail(result2.data);
    setLoading(false);
  }

  useEffect(()=>{
    searchAll(personTVURL, personDetailURL);
  }, [])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
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
                  personTV.map((TV) => {
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