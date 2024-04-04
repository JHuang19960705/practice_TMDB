import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CurrentSlide({ currentUser }) {
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
      <Slider ref={slider} {...settings}>
        {
          // 渲染目前使用者的幻燈片 
          currentUser && currentUser.user.slide.tmdbImgBackdrop &&
          currentUser.user.slide.tmdbImgBackdrop.map((backdrop, index) => {
            return (
              <button key={backdrop} >
                <img src={tmdbBaseURL + backdrop} alt={`Slide ${index + 1}`} style={{ width: "100%", margin: "auto" }} />
              </button>)
          })
        }
      </Slider>
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
    </div>
  )
}
