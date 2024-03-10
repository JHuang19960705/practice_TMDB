import React  from 'react'
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CurrentTheater({currentUser}) {
  
  return (
    <div id="carousel-wrap">
    <div id="carousel-container">
      <ul id="carousel" className="animate js-slider-wrap">
        {currentUser && currentUser.user.theater.releases.tmdbImgBackdrop &&
          currentUser.user.theater.releases.tmdbImgBackdrop.map((backdrop) => {         
            return (
              <button className="slide js-slide">
                <img src={tmdbBaseURL + backdrop} />
              </button>
        )})}
      </ul>
      <div id="controls">
        <span id="prev" className="js-slider-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
        <span id="next" className="js-slider-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
      </div>
    </div>
  </div> 
  )
}
