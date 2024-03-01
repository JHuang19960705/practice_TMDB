import React, { useState, useEffect } from 'react';
import "../../../../styles/movie-index.css";
import Navigation from "./Component/Navigation"
import TheaterItems from './Component/TheaterItems';
import { useParams } from 'react-router-dom';
import AuthService from '../../../../services/auth.service';
import Cart from './Component/Cart';

export default function UserTheater () {
  const {userId} = useParams()
  const [cartItem, setCartItem] = useState([]);
  const [userRecommend, setUserRecommend] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    AuthService.getUserRecommendById(userId)
      .then((data) => {
        setUserRecommend(data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
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
                        userRecommend.theater &&
                        userRecommend.theater.releases.map((id) => {
                          return (
                            <TheaterItems data={id} cartItem={cartItem} setCartItem={setCartItem}/>
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
      <button className="cart" to="/checkout">
        <Cart cartItem={cartItem} setCartItem={setCartItem}/>
      </button>
    </div>  
  )
}

