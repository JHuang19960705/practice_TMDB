import React, { useState } from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
import { Outlet, Link } from "react-router-dom";

function Picture2({ data, cartItem, setCartItem }) {

  const addCart = (addItem) => {
    addItem.quantity = 1;
    setCartItem([...cartItem, addItem]);
  }

  return (
    <div className="item">
        <Link to={`/movie/${data.id}`} target='_blank'>
          <div  className="item_image" data-product-id={data.id}>
              <img src={tmdbBaseURL + data.poster_path} />
          </div>
        </Link>
        <Outlet />
        <div className="item_title"><p>{data.original_name}</p></div>                            
        <div className="product-rating-container">
            {/* <img class="product-rating-stars" src="img/EC/ratings/rating-${product.rating.stars * 10}.png" alt="" /> */}
            <div className="product-rating-count">{data.vote_count}</div>
        </div>
        <div className="product-rent"> 
          <button 
            onClick={()=>{addCart(data)}}
            className="add-to-cart-button js-add-to-cart-button" 
            data-product-id={data.id} 
          >
              單片租借
          </button>
          <select className="rent-day">
            <option defaultValue="1">1天</option>
            <option value="2">2天</option>
            <option value="3">3天</option>
            <option value="4">4天</option>
            <option value="5">5天</option>
            <option value="6">6天</option>
            <option value="7">7天</option>
            <option value="8">8天</option>
            <option value="9">9天</option>
            <option value="10">10天</option>
          </select>
        </div>
        <a href="/影評.html" target="_blank" className="js-reviews-click" data-reviews-click-id={data.id}>
          <p className="audio-comment">- 看影評 -</p>
        </a>
    </div>
  )
}

export default Picture2;