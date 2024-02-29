import React from 'react';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function CkeckoutItem({ cartItem }) {

  return (
    <div class="product-container js-product-container-${product.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>
      <div class="product-image-container">
        <img src={tmdbBaseURL + cartItem.poster_path} />
      </div>
      
      <div class="product-name">{cartItem.original_name}</div>
      
      <div class="product-price">{cartItem.vote_count}</div>
      
      <div class="product-quantity">
      <span>
          Quantity: <span class="quantity-label">{ cartItem.quantity }</span>
      </span>
      <span class="update-quantity-link link-primary">
          Update
      </span>
      <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id={cartItem.id} >
          Delete
      </span>
      </div>
    </div> 
  )
}
