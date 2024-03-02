import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AuthService from "./services/auth.service";
import "./styles/reset.css";
import FirstEnroll from "./pages/First-Enroll/FirstEnroll";
import RegisterComponent from "./pages/First-Enroll/Register/register-component";
import LoginComponent from "./pages/First-Enroll/Login/login-component";
import VisitorRole from "./pages/First-Enroll/VisitorRole/VisitorRole"
import Layout from "./Layout";
import Homepage from "./pages/Homepage/Homepage";
import PatchProfilePage from "./pages/Homepage/PatchProfile/PatchProfilePage";
import PatchRole from "./pages/Homepage/patchRole/PatchRole"
import AllUser from "./pages/AllUser/AllUser";
import ThisUser from "./pages/AllUser/ThisUser/ThisUser";
import UserReviews from "./pages/AllUser/ThisUser/UserReviews/UserReviews";
import UserRecommend from "./pages/AllUser/ThisUser/UserRecommend/UserRecommend";
import UserTheater from "./pages/AllUser/ThisUser/UserTheater/UserTheater";
import Back from "./pages/Back/Back";
import YourReviews from "./pages/Back/YourReviews/YourReviews";
import PatchContentPage from "./pages/Back/YourReviews/PatchContent/PatchContentPage";
import Recommend from "./pages/Back/Recommend/Recommend";
import HandleSlide from "./pages/Back/Recommend/HandleSlide/HandleSlide";
import HandleNews from "./pages/Back/Recommend/HandleNews/HandleNews";
import HandleCasts from "./pages/Back/Recommend/HandleCasts/HandleCasts";
import HandleReview from "./pages/Back/Recommend/HandleReview/HandleReview";
import HandleTheme from "./pages/Back/Recommend/HandleTheme/HandleTheme";
import HandleFavorite from "./pages/Back/Recommend/HandleFavorite/HandleFavorite";
import HandleTheater from "./pages/Back/Theater/HandleTheater";
import ComingSoon from "./pages/Back/Theater/ComingSoon/ComingSoon";
import OnTime from "./pages/Back/Theater/OnTime/OnTime";
import LeavingSoon from "./pages/Back/Theater/LeavingSoon/LeavingSoon";
import Search from "./pages/Search/Search";
import SearchMovie from "./pages/Search/SearchMovie/SearchMovie";
import MovieDetail from "./pages/Search/SearchMovie/MovieDetail/MovieDetail";
import PostMovieContent from "./pages/Search/SearchMovie/PostMovieContent/PostMovieContent";
import Reviews from "./pages/Search/Reviews/Reviews";
// import Crabtv from "./pages/Crabtv";
// import Page404 from "./pages/Page404";
// import Shopping from './pages/Shopping/Shopping';
// import Checkout from './pages/Shopping/Checkout';
// import EnrollComponent from "./pages/Enroll/enroll-component";
// import ContentComponent from "./pages/Content/content-component";
// import CharacterAll from "./pages/Character/CharacterAll";
// import CharacterPage from "./pages/Character/CharacterPage";
// import CommentPage from "./pages/Comment/CommentPage";
// import NewsIndex from "./pages/News/NewsIndex";
// import Theme from "./pages/Theme/Theme";
// import Test from "./Test";
// import Test2 from "./Test2";
// import Picture from "./components/Picture";



function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  return(
    <Router>
      <Routes>
        <Route path="firstEnroll" element={<FirstEnroll currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>
          <Route path="register/:clickRole" element={<RegisterComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="login/:clickRole" element={<VisitorRole currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="login" element={<LoginComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
        </Route>
        <Route path="/" element={<Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
          <Route index element={<Homepage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path="profile/patchProfile" element={<PatchProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path="profile/patchRole" element={<PatchRole currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="allUser" element={<AllUser currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
            <Route path=":userId" element={<ThisUser currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
              <Route path="userReviews" element={<UserReviews currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
              <Route path="userRecommend" element={<UserRecommend currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
              <Route path="userTheater" element={<UserTheater currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
            </Route>
          </Route>
          <Route path="back" element={<Back currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>
            <Route path="yourReviews" element={<YourReviews currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>
              <Route path=":contentId" element={<PatchContentPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            </Route>
            <Route path="yourRecommend" element={<Recommend currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>
              <Route path="handleSlide" element={<HandleSlide currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
              <Route path="handleNews" element={<HandleNews currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
              <Route path="handleCasts" element={<HandleCasts currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
              <Route path="handleReview" element={<HandleReview currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
              <Route path="handleTheme" element={<HandleTheme currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
              <Route path="handleFavorite" element={<HandleFavorite currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            </Route>
            <Route path="yourTheater" element={<HandleTheater currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>
              <Route path="onTime" element={<OnTime currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
              <Route path="comingSoon" element={<ComingSoon currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
              <Route path="leavingSoon" element={<LeavingSoon currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
            </Route>
          </Route>
          <Route path="search" element={<Search currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
            <Route path="movie" element={<SearchMovie currentUser={currentUser} setCurrentUser={setCurrentUser} />} >
              <Route path=":TMDBId" element={<MovieDetail currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
              <Route path="postMovieContent/:TMDBId" element={<PostMovieContent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
              <Route path="reviews/:TMDBId" element={<Reviews currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            </Route>
          </Route>
          {/* <Route path="checkout" element={<Checkout cartItem={cartItem} setCartItem={setCartItem} />}></Route> */}         
          {/* 不分使用者 */}
          {/* <Route path="movie/:movieId" element={<Movie favoriteMovie={favoriteMovie} setfavoriteMovie={setfavoriteMovie} />}></Route>
          <Route path="reviews/:movieId" element={<Reviews currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
          <Route path="shopping" element={<Shopping favoriteMovie={favoriteMovie} setfavoriteMovie={setfavoriteMovie} cartItem={cartItem} setCartItem={setCartItem} currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
          <Route path="crabtv" element={<Crabtv favoriteMovie={favoriteMovie} setfavoriteMovie={setfavoriteMovie} currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
          <Route path="comment/:contentId" element={<CommentPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="*" element={<Page404 />}></Route> */}
          {/* 之後可能用不到 */}
          {/* <Route path="character" element={<CharacterAll currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
          <Route path="character/:castId" element={<CharacterPage />}></Route>
          <Route path="content" element={<ContentComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="theme" element={<Theme currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
          <Route path="newsIndex" element={<NewsIndex />} /> 
          <Route path="enroll" element={<EnrollComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
          */}
        </Route>  
        {/* <Route path="test" element={<Test/>}><Route path="test2" element={<Test2 />}/></Route> */}
      </Routes>
    </Router>
  )
} 

export default App;
