import React from "react";
import CharacterPic from "./CharacterPic";

export default function Character({userRecommend}) { 

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
        { userRecommend && <CharacterPic castId={userRecommend.cast.cast1} />}
        { userRecommend && <CharacterPic castId={userRecommend.cast.cast2} />}
        { userRecommend && <CharacterPic castId={userRecommend.cast.cast3} />}
        { userRecommend && <CharacterPic castId={userRecommend.cast.cast4} />}
      </div>
    </div>
  )
}
