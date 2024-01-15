import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Crabtv from "./pages/Crabtv";
import Page404 from "./pages/Page404";
import Shopping from './pages/Shopping/Shopping';
import Checkout from './pages/Shopping/Checkout';
import Movie from "./pages/Shopping/Movie";
import RegisterComponent from "./pages/Register/register-component";
import LoginComponent from "./pages/Login/login-component";
import ProfileComponent from "./pages/Profile/profile-component";
import EnrollComponent from "./pages/Enroll/enroll-component";
import PostContentComponent from "./pages/Post/Post";
import ContentComponent from "./pages/Content/content-component";
import Reviews from "./pages/Shopping/Reviews";
import CharacterAll from "./pages/Character/CharacterAll";
import CharacterPage from "./pages/Character/CharacterPage";
import CommentPage from "./pages/Comment/CommentPage";
import "./styles/reset.css"
import axios from "axios";
import AuthService from "./services/auth.service";
import PatchContentPage from "./pages/PatchContent/PatchContentPage";
import PatchProfilePage from "./pages/PatchProfile/PatchProfilePage";


function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const session_id = process.env.REACT_APP_SESSION_ID;
  const account_id = process.env.REACT_APP_ACCOUNT_ID;
  const initialURL = `https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=${API_KEY}&region=JP`;
  const favoriteMovieURL = `https://api.themoviedb.org/3/account/${account_id}/favorite/tv?api_key=${API_KEY}&session_id=${session_id}&page=1`
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  let [cartItem, setCartItem] = useState([]);
  let [data, setData] = useState(null);
  let [favoriteMovie, setfavoriteMovie] = useState(null);
  const search = async (URL1, URL2) => {
    let result1 = await axios.get(URL1);
    let result2 = await axios.get(URL2);
    setData(result1.data.results);
    setfavoriteMovie(result2.data.results);
  };
  
  useEffect(()=>{
    search(initialURL, favoriteMovieURL);
  }, [])
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
          <Route index element={<Homepage currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
          <Route path="crabtv" element={
            <Crabtv 
              favoriteMovie={favoriteMovie} setfavoriteMovie={setfavoriteMovie} 
              currentUser={currentUser} setCurrentUser={setCurrentUser}
            />}>
          </Route>
          <Route path="shopping" element={
            <Shopping 
              favoriteMovie={favoriteMovie} setfavoriteMovie={setfavoriteMovie}
              cartItem={cartItem} setCartItem={setCartItem}
              currentUser={currentUser} setCurrentUser={setCurrentUser}
            />}>
          </Route>
          <Route path="checkout" element={<Checkout cartItem={cartItem} setCartItem={setCartItem} />}></Route>
          <Route path="movie/:movieId" element={<Movie favoriteMovie={favoriteMovie} setfavoriteMovie={setfavoriteMovie} />}></Route>
          <Route path="reviews/:movieId" element={<Reviews currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
          <Route path="character" element={<CharacterAll />}></Route>
          <Route path="character/:castId" element={<CharacterPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="register" element={<RegisterComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="login" element={<LoginComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="enroll" element={<EnrollComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="profile" element={<ProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="patchProfile" element={<PatchProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="postContent/:movieId" element={<PostContentComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="patchContent/:contentId" element={<PatchContentPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="content" element={<ContentComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="comment/:userId" element={<CommentPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
        </Route>  
      </Routes>
    </BrowserRouter>
  )
} 

export default App;
