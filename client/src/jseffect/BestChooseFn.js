import React from 'react'

function BestChooseFn() {
  //電影精選
  let bestPicWrap = document.querySelector(".js-best-pic-wrap");
  let isDragStart = false, globalPageX, globalScrollLeft;
  let dragStart = (e)=>{
    isDragStart = true;
    globalPageX = e.pageX || e.touches[0].pageX;//按下去瞬間的值
    globalScrollLeft = bestPicWrap.scrollLeft;//按下去瞬間的值
  };
  let dragging = (e)=>{
    if( !isDragStart ) return;
    e.preventDefault();//圖片有個default設定，就是會自動被抓取。
    let positionDiff = (e.pageX || e.touches[0].pageX) - globalPageX;
    bestPicWrap.scrollLeft = globalScrollLeft - positionDiff;
  };
  let dragStop = ()=>{
    isDragStart = false;
  };
  bestPicWrap.addEventListener( "mousedown", dragStart );
  bestPicWrap.addEventListener( "touchstart", dragStart );

  bestPicWrap.addEventListener( "mousemove", dragging );
  bestPicWrap.addEventListener( "touchmove", dragging );

  bestPicWrap.addEventListener( "mouseup", dragStop );
  bestPicWrap.addEventListener( "touchend", dragStop );
}

export default BestChooseFn;