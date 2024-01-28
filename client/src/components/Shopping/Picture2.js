import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_KEY;

function Picture2({ currentUser, setCurrentUser, data, cartItem, setCartItem }) {

  const MovieURL = `https://api.themoviedb.org/3/tv/${data}?api_key=${API_KEY}&language=ja-JP`
  const [isLoading, setLoading] = useState(true);
  let [movieAll, setMovieAll] = useState(null);
  const search = async (URL) => {
    let result1 = await axios.get(URL);
    setMovieAll(result1.data);
    setLoading(false);
  };
  useEffect(()=>{
    search(MovieURL);  
  }, [])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  const addCart = (addItem) => {
    addItem.quantity = 1;
    setCartItem([...cartItem, addItem]);
  }

  return (
    <div className="item">
        <Link to={`/movie/${movieAll.id}`} target='_blank'>
          <div  className="item_image" data-productid={movieAll.id}>
              <img src={tmdbBaseURL + movieAll.poster_path} />
          </div>
        </Link>
        <Outlet />
        <div className="item_title"><p>{movieAll.original_name}</p></div>                            
        <div className="product-rating-container">
            {/* <img class="product-rating-stars" src="img/EC/ratings/rating-${product.rating.stars * 10}.png" alt="" /> */}
            <div className="product-rating-count">{movieAll.vote_count}</div>
        </div>
        <div className="product-rent"> 
          <button 
            onClick={()=>{addCart(movieAll)}}
            className="add-to-cart-button js-add-to-cart-button" 
            data-product-id={movieAll.id} 
          >
            線上收看
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
        <Link to={`/reviews/${movieAll.id}`} target="_blank" className="js-reviews-click" data-reviewsclickid={movieAll.id}>
          <p className="audio-comment">- 看影評 -</p>
        </Link>
        <Outlet />
    </div>
  )
}

export default Picture2;