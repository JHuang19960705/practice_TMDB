import React from 'react';
import SlidePic from "./SlidePic"

export const Slide = ({ data }) => {
  return (
    <div id="carousel-wrap">
      <div id="carousel-container">
        <ul id="carousel" className="animate js-slider-wrap">
          {
            data &&
            data.slice(0, 5).map((d) => {
              return <SlidePic data={d}/>
            })
          }
        </ul>
        <div id="controls">
          <span id="prev" className="js-slider-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
          <span id="next" className="js-slider-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
        </div>
      </div>
    </div> 
  )
}


export default Slide;