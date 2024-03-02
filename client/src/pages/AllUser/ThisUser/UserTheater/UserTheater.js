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
  const [isOpen1, setIsOpen1] = useState(true);// 默认打开
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
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
  const toggleOpen = (tabNumber) => {
    // 关闭所有标签页
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    // 打开指定的标签页
    switch (tabNumber) {
      case 1:
        setIsOpen1(true);
        break;
      case 2:
        setIsOpen2(true);
        break;
      case 3:
        setIsOpen3(true);
      break;
      default:
        break;
    }
  };
  return (
    <div>
      <main className="pageWrap">
        <div className="sideScrollPage js-wheel-sideScrollPage" >

          {/* <!-- 頁數+產品 --> */}
          <div className="sideScrollPage_content">
              <div className="gallery">

                  {/* <!-- 頁數 --> */}
                  <Navigation toggleOpen={toggleOpen}/>

                  {/* <!-- 產品 --> */}
                  <div className="gallery_inner">
                    <div className="items js-products-wrap" >
                      {isOpen1 && (
                        userRecommend.theater &&
                        userRecommend.theater.releases.map((id) => {
                          return (
                            <TheaterItems data={id} cartItem={cartItem} setCartItem={setCartItem}/>
                          )
                        })
                      )}
                      {isOpen2 && (
                        userRecommend.theater &&
                        userRecommend.theater.leaving.map((id) => {
                          return (
                            <TheaterItems data={id} cartItem={cartItem} setCartItem={setCartItem}/>
                          )
                        })
                      )}
                      {isOpen3 && (
                        userRecommend.theater &&
                        userRecommend.theater.upcoming.map((id) => {
                          return (
                            <TheaterItems data={id} cartItem={cartItem} setCartItem={setCartItem}/>
                          )
                        })
                      )}
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

