import React, { useState, useEffect } from "react";
import TheaterButton from './TheaterButton';
import axios from "axios";
import TheaterPic from "./TheaterPic";
import TheaterStage from "./TheaterStage";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Theater({currentUser, setCurrentUser}) {
  const [display, setDisplay] = useState("none");
  const [movie, setMovie] = useState(null);
  const [theater, setTheater ] = useState({
    releases: [],
    leaving: [],
    upcoming: []
  });
  let genreId = "35";
  let genresURL = `https://api.themoviedb.org/3/discover/tv?with_origin_country=JP&api_key=${API_KEY}&with_genres=${genreId}`
  let [genresId, setGenresId] = useState(null);
  const search = async(URL) => {
    let result = await axios.get(URL);
    setGenresId(result.data.results);
  }
  useEffect(() => {
    search(genresURL)
  },[])
  const handleSortBy = async(e) => {
    genreId = e.currentTarget.dataset.genreId;
    genresURL = `https://api.themoviedb.org/3/discover/tv?with_origin_country=JP&api_key=${API_KEY}&with_genres=${genreId}`
    await search(genresURL)
  }
  return (
    <div style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column" }}>
      <TheaterStage theater={theater} setTheater={setTheater} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div>
        <button onClick={handleSortBy} data-genre-id="35" className="btn btn-success">喜劇片</button>
        <button onClick={handleSortBy} data-genre-id="10759" className="btn btn-success">動作片</button>
        <button onClick={handleSortBy} data-genre-id="16" className="btn btn-success">動畫片</button>
        <button onClick={handleSortBy} data-genre-id="80" className="btn btn-success">犯罪片</button>
        <button onClick={handleSortBy} data-genre-id="99" className="btn btn-success">紀錄片</button>
        <button onClick={handleSortBy} data-genre-id="18" className="btn btn-success">戲劇片</button>
        <button onClick={handleSortBy} data-genre-id="10751" className="btn btn-success">闔家片</button>
        <button onClick={handleSortBy} data-genre-id="10762" className="btn btn-success">兒童片</button>
        <button onClick={handleSortBy} data-genre-id="9648" className="btn btn-success">懸疑片</button>
        <button onClick={handleSortBy} data-genre-id="10765" className="btn btn-success">科幻片</button>
      </div>
      <div className="pictures">
        {
          genresId &&
          genresId.map((g) => {
            return <TheaterPic data={g} currentUser={currentUser} display={display} setDisplay={setDisplay}  setMovie={setMovie}/>
          })
        }
      </div>
      <TheaterButton theater={theater} currentUser={currentUser} setCurrentUser={setCurrentUser} display={display} setDisplay={setDisplay} movie={movie} setMovie={setMovie} />
    </div>
  )
}
