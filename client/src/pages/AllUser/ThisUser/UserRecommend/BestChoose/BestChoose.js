import React, { useState, useEffect } from "react";
import axios from "axios";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

function BestChoose({userRecommend}) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [isLoading, setLoading] = useState(true);
  const [personTV, setPersonTV] = useState(null);
  const [personDetail, setPersonDetail] = useState(null);

  useEffect(()=>{
    if(userRecommend){
      const personTVURL = `https://api.themoviedb.org/3/person/${userRecommend.favoritePerson}/combined_credits?&api_key=${API_KEY}`;
      const personDetailURL = `https://api.themoviedb.org/3/person/${userRecommend.favoritePerson}?api_key=${API_KEY}`;
      searchAll(personTVURL, personDetailURL);
    }
  }, [userRecommend])

  const searchAll = async(URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2);
    setPersonTV(result1.data.cast);
    setPersonDetail(result2.data);
    setLoading(false);
  }
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

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
                    if (TV.backdrop_path) { 
                      return (
                        <button className="best-pic">
                          {<img src={tmdbBaseURL + TV.backdrop_path} alt="" draggable="false"/>}
                        </button>
                      )
                  }})
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default BestChoose