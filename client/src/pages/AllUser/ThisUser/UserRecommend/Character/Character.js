import React, { useState, useEffect } from "react";
import CharacterPic from "./CharacterPic";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Character({userRecommend}) { 
  const [isLoading, setLoading] = useState(true);  
  useEffect(() => {
    if(userRecommend){setLoading(false);}
  }, [userRecommend])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="character-wrap">
      {/* <!-- 標題 --> */}
      <div className="character-title">
          <button target="_blank">
            <div className="character-title-p">
              <div>當紅角色 ／</div>
              <div className="character-title-p-arrow">＞＞</div>
            </div>
          </button>
      </div>
      {/* <!-- 四個圈圈 --> */}
      <div className="character-container js-character-container-wrap">  
        { userRecommend.cast && <CharacterPic castId={userRecommend.cast.cast1} />}
        { userRecommend.cast && <CharacterPic castId={userRecommend.cast.cast2} />}
        { userRecommend.cast && <CharacterPic castId={userRecommend.cast.cast3} />}
        { userRecommend.cast && <CharacterPic castId={userRecommend.cast.cast4} />}
      </div>
    </div>
  )
}
