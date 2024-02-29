import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CkeckoutItem from '../../components/Shopping/CkeckoutItem';
import "../../styles/EC-checkout.css";


export default function Checkout({ cartItem }) {


  return (
    <div className="container">
      <div className="cart-list">
        <div className="cart-product-wrap">
          <div className="product-container-wrap js-product-wrap">
            {
              cartItem && 
              cartItem.map((item) => {
                return <CkeckoutItem cartItem={item} />
              })
            }
          </div>
        </div> 
      </div>
      <div className="cart_checkout">
          <div className="subTotal">
            <div className="text">小計</div>
            <div className="price" x-text="$store.cart.totalPrice()">￥0</div>
          </div>

          <p className="note">配送料は購入手続き時に計算されます。</p>

          <label className="agreeBtn" for="AgreeBtn">
            <input type="checkbox" id="AgreeBtn" />
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill="black" d="M6.345 13.034 0 6.69 1.287 5.4l5.058 4.968L14.713 2 16 3.287Z"></path>
              </svg>
            </div>
            <p className="link"><a href="/pages/privacy-policy" target="_blank">個人情報の取り扱い</a> および <a href="/pages/shipping-policy/" target="_blank">配送/決済について</a>に同意する</p>
          </label>

          <form action="" method="post">
            <input type="submit" name="checkout" value="決済画面へ移動する" className="is-disable"/>
          </form>
      </div>
    </div>
  )
}
