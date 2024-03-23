import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function Slide({ userRecommend }) {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id="carousel-wrap">
      {/* <div id="carousel-container"> */}
      {/* <ul id="carousel"> */}
      <Slider ref={slider} {...settings}>
        {
          userRecommend && userRecommend.slide.tmdbImgBackdrop &&
          userRecommend.slide.tmdbImgBackdrop.map((backdrop) => {
            return (
              <div>
                <img src={tmdbBaseURL + backdrop} style={{ width: "100%", margin: "auto" }} />
              </div>)
          })
        }
      </Slider>
      {/* </ul> */}
      <div id="controls">
        <span id="prev" onClick={() => slider?.current?.slickPrev()}>
          <svg className="w-5 md:w-10 mx-1 text-blue-500 transform dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </span>
        <span id="next" onClick={() => slider?.current?.slickNext()}>
          <svg className="w-5 md:w-10 mx-1 text-blue-500 transform dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </div>
      {/* </div> */}
    </div>
  )
}