import React, { useState } from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function TheaterItems({ poster, cartItem, setCartItem }) {
  const [addItem, setAddItem] = useState(null);

  // const addCart = (e) => {
  //   setCartItem([...cartItem, e.currentTarget.dataset.id]);
  // }

  return (
    <div className="item">
      <div>
        <button className="item_image">
          <img src={tmdbBaseURL + poster} />
        </button>
      </div>
      <div className="product-rent">
        <button className="add-to-cart-button">線上收看</button>
      </div>
    </div>
  )
}