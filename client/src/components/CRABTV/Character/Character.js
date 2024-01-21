import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom"
import CharacterPic from "./CharacterPic";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Character({currentUser}) {
  return (
    <div className="character-wrap">
      {/* <!-- 標題 --> */}
      <div className="character-title">
          <Link to="/character" target="_blank">
            <div className="character-title-p">
              <div>當紅角色 ／</div>
              <div className="character-title-p-arrow">＞＞</div>
            </div>
          </Link>
          <Outlet />
      </div>
      {/* <!-- 四個圈圈 --> */}
      <div className="character-container js-character-container-wrap">  
        { currentUser.user.cast && <CharacterPic castId={currentUser.user.cast.cast1} />}
        { currentUser.user.cast && <CharacterPic castId={currentUser.user.cast.cast2} />}
        { currentUser.user.cast && <CharacterPic castId={currentUser.user.cast.cast3} />}
        { currentUser.user.cast && <CharacterPic castId={currentUser.user.cast.cast4} />}
      </div>
    </div>
  )
}
