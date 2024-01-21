import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";


export default function FavoritePerson({ newCast, currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  const favoritePersonChange = async() => {
    try{  
      let favoritePerson = newCast;
      let response = await AuthService.patchFavoritePerson(currentUser.user._id, favoritePerson)
      window.alert("修改成功。您現在將被導向到電影大廳");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/crabtv")
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  return (
    <div><button onClick={favoritePersonChange}>FavoritePerson Change</button></div>
  )
}
