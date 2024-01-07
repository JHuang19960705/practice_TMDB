import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Crabtv from "./pages/Crabtv";
import Page404 from "./pages/Page404";
import Shopping from './pages/Shopping/Shopping';
import Checkout from './pages/Shopping/Checkout';
import Movie from "./pages/Shopping/Movie";
import "./styles/style.css";
import "./styles/movie-index.css";
import "./styles/crab.css";
import "./styles/EC-checkout.css";
import "./styles/movie-page.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const initialURL = `https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=${API_KEY}&region=JP`;
const SESSION_ID = process.env.REACT_APP_SESSION_ID;
const ACCOUNT_ID = process.env.REACT_APP_ACCOUNT_ID;
const favoriteMovieURL = `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/favorite/tv?api_key=${API_KEY}&session_id=${SESSION_ID}&page=1`


function App() {
  let [cartItem, setCartItem] = useState([]);
  let [data, setData] = useState(null);
  let [favoriteMovie, setfavoriteMovie] = useState(null);
  const search = async (URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2)
    setData(result1.data.results);
    setfavoriteMovie(result2.data.results);
  };
  
  useEffect(()=>{
    search(initialURL, favoriteMovieURL);
  }, [])
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="crabtv" element={<Crabtv data={data} setData={setData} />}></Route>
          <Route path="shopping" element={
            <Shopping 
              favoriteMovie={favoriteMovie}  setfavoriteMovie={setfavoriteMovie}
              cartItem={cartItem} setCartItem={setCartItem} 
            />}>
          </Route>
          <Route path="checkout" element={<Checkout cartItem={cartItem} setCartItem={setCartItem} />}></Route>
          <Route path="movie/:movieId" element={<Movie favoriteMovie={favoriteMovie} setfavoriteMovie={setfavoriteMovie} />}>
          </Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
} 

export default App;
