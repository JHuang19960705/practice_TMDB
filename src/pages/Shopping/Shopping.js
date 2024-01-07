import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Picture2 from '../../components/Shopping/Picture2';
import Navigation from '../../components/Navigation';
import Cart from '../../components/Shopping/Cart';

const Shopping = ({ favoriteMovie, cartItem, setCartItem }) => {
 
  return (
    <div>
      <main className="pageWrap">
        <div className="sideScrollPage js-wheel-sideScrollPage" >

          {/* <!-- 頁數+產品 --> */}
          <div className="sideScrollPage_content">
              <div className="gallery">

                  {/* <!-- 頁數 --> */}
                  <Navigation />

                  {/* <!-- 產品 --> */}
                  <div className="gallery_inner">
                    <div className="items js-products-wrap" >
                      {
                        favoriteMovie &&
                        favoriteMovie.map((d) => {
                          return (
                            <Picture2 data={d} cartItem={cartItem} setCartItem={setCartItem}/>
                          )
                        })
                      }
                    </div>    
                  </div>

              </div>
          </div>

          {/* <!-- 右下角箭頭 --> */}
          <div className="scrollProgress">
              <div className="scrollProgress_attention">
                  <div className="scrollProgress_text"></div>
                  <div className="scrollProgress_arrow">→</div>
              </div>
              <div className="scrollProgress_current"></div>
          </div>
        </div>
      </main>
      <Link className="cart" to="/checkout">
        <Cart cartItem={cartItem} setCartItem={setCartItem}/>
      </Link>
      <Outlet />
    </div>  
  )
}

export default Shopping;

