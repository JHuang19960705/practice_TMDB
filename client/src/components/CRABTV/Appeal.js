import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Appeal() {
  return (
    <div class="appeal-wrap">
      <div class="appeal-wrap-content">
          <div class="appeal-wrap-content-pic">
            <img src="" alt=""/>
          </div>
          <div class="appeal-wrap-content-text">
            <p class="appeal-wrap-content-text-tilte">選擇一部好作品</p>
            <p class="appeal-wrap-content-text-subtitle">
                <p>寫下你對這部作品的</p>
                <p>熱情、冷靜、驚嚇、悲傷、恐懼....</p>
            </p>
            <Link to="/shopping" target="_blank" class="appeal-wrap-content-text-button">
                立即開始
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Appeal;