import React, { useState } from 'react';
// import axios from 'axios';
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";
// const API_KEY = process.env.REACT_APP_API_KEY;

export default function TheaterItems({ poster, cartItem, setCartItem }) {
  const [addItem, setAddItem] = useState(null);
  // const [isLoading, setLoading] = useState(true);
  // const [tvAll, setTVAll] = useState(null);
  // async function search(URL) {
  //   let result1 = await axios.get(URL);
  //   setTVAll(result1.data);
  //   setLoading(false);
  // }
  // useEffect(()=>{
  //   const tvURL = `https://api.themoviedb.org/3/tv/${data}?api_key=${API_KEY}&language=ja-JP`
  //   search(tvURL);  
  // }, [data])
  // if (isLoading) {
  //   return <div className="App">Loading...</div>;
  // }

  // const addCart = (e) => {
  //   setCartItem([...cartItem, e.currentTarget.dataset.id]);
  // }

  return (
    <div className="item">
        <button>
          <div className="item_image">
              <img src={tmdbBaseURL + poster} />
          </div>
        </button>
        {/* <div className="item_title"><p>{tvAll.original_name}</p></div>                             */}
        <div className="product-rating-container">
            {/* <div className="product-rating-count">{tvAll.vote_count}</div> */}
        </div>
        <div className="product-rent"> 
          <button 
            // onClick={addCart}
            className="add-to-cart-button js-add-to-cart-button" 
            // data-id={tvAll.id} 
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
        <button className="js-reviews-click">
          <p className="audio-comment">- 看影評 -</p>
        </button>
    </div>
  )
}