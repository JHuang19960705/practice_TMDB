import React, { useState } from "react";
import HandleReview from "./HandleReview/HandleReview";
import HandleTheme from "./HandleTheme/HandleTheme";
import HandleFavorite from "./HandleFavorite/HandleFavorite";
import HandleSlide from "./HandleSlide/HandleSlide";
import HandleNews from "./HandleNews/HandleNews";
import HandleCasts from "./HandleCasts/HandleCasts";
import Theater from "../Theater/Theater";

export default function Back({ currentUser, setCurrentUser }) {
  const [isOpen1, setIsOpen1] = useState(true);// 默认打开
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false); 
  const [isOpen6, setIsOpen6] = useState(false);  
  const [isOpen7, setIsOpen7] = useState(false);
  const toggleOpen = (tabNumber) => {
    // 关闭所有标签页
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);

    // 打开指定的标签页
    switch (tabNumber) {
      case 1:
        setIsOpen1(true);
        break;
      case 2:
        setIsOpen2(true);
        break;
      case 3:
        setIsOpen3(true);
        break;
      case 4:
        setIsOpen4(true);
      break;
      case 5:
        setIsOpen5(true);
      break;
      case 6:
        setIsOpen6(true);
      break;     
      case 7:
        setIsOpen7(true);
      break;  
      default:
        break;
    }
  };
  return (
    <div className='container-lg'>
      <div className='row'>
        <div className='col-2' style={{display:"flex", flexDirection:"column"}}>
          <div onClick={() => toggleOpen(1)} className='btn btn-success' style={{margin:"10px"}}>電影介紹</div>
          <div onClick={() => toggleOpen(2)} className='btn btn-success' style={{margin:"10px"}}>新聞分享</div>
          <div onClick={() => toggleOpen(3)} className='btn btn-success' style={{margin:"10px"}}>當紅明星</div>
          <div onClick={() => toggleOpen(4)} className='btn btn-success' style={{margin:"10px"}}>影評推薦</div>
          <div onClick={() => toggleOpen(5)} className='btn btn-success' style={{margin:"10px"}}>主題分類</div>
          <div onClick={() => toggleOpen(6)} className='btn btn-success' style={{margin:"10px"}}>最愛人物</div>
          <div onClick={() => toggleOpen(7)} className='btn btn-success' style={{margin:"10px"}}>電影院上映</div>
        </div>
        <div className='col-10 bg-light text-dark'>
          {isOpen1 && (
            <div>
              <HandleSlide currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
          )}
          {isOpen2 && (
            <div>
              <HandleNews currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
          )}
          {isOpen3 && (
            <div>
              <HandleCasts currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
          )}
          {isOpen4 && (
            <div>
              <HandleReview currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
          )}
          {isOpen5 && (
            <div>
              <HandleTheme currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
          )}
          {isOpen6 && (
            <div>
              <HandleFavorite currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
          )}
          {isOpen7 && (
            <div>
              <Theater currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
