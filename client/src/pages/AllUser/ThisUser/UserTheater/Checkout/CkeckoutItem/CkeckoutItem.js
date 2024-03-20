import React from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CkeckoutItem({ cartItem }) {

  return (
    <div className="product-container js-product-container-${product.id}">
      <div className="delivery-date">
        Delivery date: Tuesday, June 21
      </div>
      <div className="product-image-container">
        <img src={tmdbBaseURL + cartItem.poster_path} />
      </div>
      
      <div className="product-name">{cartItem.original_name}</div>
      
      <div className="product-price">{cartItem.vote_count}</div>
      
      <div className="product-quantity">
      <span>
          Quantity: <span className="quantity-label">{ cartItem.quantity }</span>
      </span>
      <span className="update-quantity-link link-primary">
          Update
      </span>
      <span className="delete-quantity-link link-primary js-delete-quantity-link" data-product-id={cartItem.id} >
          Delete
      </span>
      </div>
    </div> 
  )
}
