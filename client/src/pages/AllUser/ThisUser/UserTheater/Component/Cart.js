import React, { useState, useEffect }  from 'react';

export default function Cart({ cartItem, setCartItem }) {
  const [itemQuantity, setItemQuantity] = useState(0);
  useEffect(()=>{
    setItemQuantity(cartItem.length)
    // quantity(cartItem);
  },[cartItem])

  // const quantity = (cartItem) => {
  //   itemQuantity += cartItem.length;
  //   return itemQuantity;
  // }

  return (

        <div className="siteHeader_cartBtn" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20">
              <path d="M16 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM26 14H10v-2.5h16V14Z"></path>
              <path d="m30 0-4 14h-2.5l4-14H30ZM10 14 6 0h2.5l4 14H10Z"></path>
              <path d="M8.5 2.5H0V0h8.5v2.5Z"></path>
            </svg>
            <div className="cart-quantity js-cart-quantity">{ itemQuantity }</div>
        </div>
  )
}
