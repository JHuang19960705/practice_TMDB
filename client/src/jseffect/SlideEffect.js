
function SlideEffect() {
  window.onresize = ()=> {
    slideAllRwd();
  }
  //幻燈片JS效果
  let slideAll =  document.querySelectorAll(".js-slide");
  let sliderHTMLWidth = document.querySelector(".js-slide").offsetWidth;
  let clickNum = 0;
  let slidetransx = [0, 0, 0, 0, 0];

  //RWD後歸零
  function slideAllRwd(){
    sliderHTMLWidth = document.querySelector(".js-slide").offsetWidth; 
    clickNum = 0;
    slidetransx = [0, 0, 0, 0, 0];
    let px = 0;
    slideAll.forEach((slide) => {
      slide.style.transform = `translateX(${slidetransx[px]}px)`
      px++;
    })
  }

  //往右按
  document.querySelector(".js-slider-next")
    .addEventListener("click", () => {
      for(let i = 0 ; i < 5; i++){
        document.querySelectorAll(".js-slide")[i]
          .style.transform = `translateX(${slidetransx[i]-sliderHTMLWidth}px)`
          slidetransx[i] -= sliderHTMLWidth;
      };
    let outerIndex = clickNum % 5;
    document.querySelectorAll((".js-slide"))[outerIndex]
      .style.transform = `translateX(${sliderHTMLWidth * ( 4 - outerIndex )}px)`;
    clickNum++;
    slidetransx[outerIndex] += sliderHTMLWidth*5;
  });
  // 往左按
  document.querySelector(".js-slider-prev")
    .addEventListener("click", () => {
      for(let i = 0 ; i < 5; i++){
        document.querySelectorAll(".js-slide")[i]
          .style.transform = `translateX(${slidetransx[i]+sliderHTMLWidth}px)`
          slidetransx[i] += sliderHTMLWidth;
      };
    clickNum --;
    if (clickNum == -1){
      clickNum = 5 - 1;
    };
    let outerIndex = clickNum % 5;
    document.querySelectorAll((".js-slide"))[outerIndex]
      .style.transform = `translateX(${sliderHTMLWidth * ( -outerIndex )}px)`;
    slidetransx[outerIndex] -= sliderHTMLWidth*5;
  });
}

export default SlideEffect