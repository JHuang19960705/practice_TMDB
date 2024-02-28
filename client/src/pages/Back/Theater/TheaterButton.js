import React, { useState } from 'react'
import AuthService from '../../../services/auth.service';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";


export default function TheaterButton({ theater, currentUser, setCurrentUser, display, setDisplay, movie, setMovie}) {
  const handleRelease = () => {
    theater.releases.push(movie.id)
  }

  const handleLeaving = () => {
    theater.leaving.push(movie.id)
  }

  const handleUpcoming = () => {
    theater.upcoming.push(movie.id)
  }
  
  const handleDisplayNone = () => {
    setDisplay("none")
    setMovie(null);
  }


  return (
    <div style={{position:"fixed", top:"50px", width:"600px", height:"600px", backgroundColor:"white", display:`${display}`, border:"4px black solid" }}>
      {  movie && ( 
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"column"}}>
            <div>{movie.name}</div>
            <img style={{width:"100px"}} src={ tmdbBaseURL + movie.poster_path} />
            <div style={{display:"flex"}}>
              <div className="btn btn-secondary" onClick={handleRelease} data-TMDBId={movie.id} >上映中</div>
              <div className="btn btn-secondary" onClick={handleLeaving} data-TMDBId={movie.id} >準備下檔</div>
              <div className="btn btn-secondary" onClick={handleUpcoming} data-TMDBId={movie.id} >下個月上映</div>
            </div>
            <buttton className="btn btn-success" onClick={handleDisplayNone} >進入電影院排成</buttton>
            <buttton className="btn btn-danger" onClick={handleDisplayNone}>取消</buttton>
          </div>
         )
      }
    </div>  
  )
}
