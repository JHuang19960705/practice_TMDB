import React from 'react';
import { Outlet, Link } from "react-router-dom";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Cast({ character }) {
  return (
    <div>
      <h2 className="archive_label f-serif">CHARACHER</h2> 
      <div className="archive_item">
        <h2 className="archive_heading">CHARACHER</h2>
        <div className="archive_index">
          <div className="num f-serif"></div>
          <div className="heading">人物</div>
        </div>
        <div className="archive_content">
          <div className="archive_col1">
            {/* <!-- 大圖 --> */}
            <div className="js-celebrity-click" datacelebrityid={character.id}>
              <Link to={`/character/${character.id}`} target="_blank">
                <img className="archive_kv " src={tmdbBaseURL + character.profile_path} />
              </Link>
              <Outlet />
            </div>
            {/* <!-- 大標題 --> */}
            <h3 className="archive_title">
              <div className="jp">{character.name}</div>
              <div className="year f-serif">{character.also_known_as[2]}</div>
            </h3>      
            {/* <!-- 內文 --> */}
            <p className="archive_description">
            {character.biography}
            </p>
          </div>
          {/* <!-- 小圖 --> */}
          <div className="archive_col2 js-celebrity-click" >
            <img src="${celebrity.event[1].img}" datacelebrityid="${celebrity.id}"/>
            <img src="${celebrity.event[2].img}" datacelebrityid="${celebrity.id}"/>
            <img src="${celebrity.event[3].img}" datacelebrityid="${celebrity.id}"/>
            <img src="${celebrity.event[4].img}" datacelebrityid="${celebrity.id}"/>
            <img src="${celebrity.event[5].img}" datacelebrityid="${celebrity.id}"/>
            <img src="${celebrity.event[6].img}" datacelebrityid="${celebrity.id}"/>
            <img src="${celebrity.event[7].img}" datacelebrityid="${celebrity.id}"/>
          </div>
        </div>
      </div>
    </div>
  )
}
