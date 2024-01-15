import React from 'react'

function ReviewsFn() {
  let windowWidth = window.innerWidth;
  window.onresize = ()=> {
    mediaStudiesRwd();
  }
  //影視劇分析RWD後幻燈片
  let slideIndex = 1;
  let slides = document.querySelectorAll(".media-studies-article");
  slides[slideIndex-1].style.display = "block";

  function mediaStudiesSlide() {
    slides.forEach((slide) => {
      slide.style.display = "none";
    })
    slides[slideIndex - 1].style.display = "block";
  }
  let mediaStudiesNextClick = document.querySelector(".js-media-studies-next");
  mediaStudiesNextClick.addEventListener("click", ()=> {
    slideIndex += 1;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    };
    mediaStudiesSlide();
  });
  let mediaStudiesPrevClick = document.querySelector(".js-media-studies-prev");
  mediaStudiesPrevClick.addEventListener("click", ()=> {
    slideIndex -= 1;
    if (slideIndex < 1) {
      slideIndex = slides.length
    };
    mediaStudiesSlide();
  })

  //抓取視窗變動
  function mediaStudiesRwd(){
    slides.forEach((slide) => {
      slide.style.display = "none";
    })
    windowWidth = window.innerWidth;
    if( windowWidth <= 768){
      mediaStudiesSlide();
    }else {
        slides.forEach((slide) => {
          slide.style.display = "block";
        })
      }
  }
}

export default ReviewsFn;