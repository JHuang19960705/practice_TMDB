import React from 'react';
import SlidePic from "./SlidePic";
import SlideEffect from "../../../jseffect/SlideEffect";

export const Slide = ({ favoriteMovie }) => {
  const handleSlideEffect = () => {
    SlideEffect();
  }
  return (
    <div id="carousel-wrap">
      <div id="carousel-container">
        <ul id="carousel" className="animate js-slider-wrap">
          {
            favoriteMovie &&
            favoriteMovie.slice(0, 5).map((f) => {         
              return <SlidePic favoriteMovie={f}/>
            })
          }
        </ul>
        <div id="controls">
          <span id="prev" onClick={ handleSlideEffect } className="js-slider-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
          <span id="next" onClick={ handleSlideEffect } className="js-slider-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
        </div>
      </div>
    </div> 
  )
}


export default Slide;