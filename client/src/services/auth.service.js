import axios from "axios";
const API_URL = "https://practice-tmdb-client.vercel.app/user";

class AuthService {
  login(email, password ) {
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password, role ) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }
  patchProfile( _id, username, email ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL +  "/patchProfile/" + _id,
      { username, email },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  patchRole(_id, role ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL +  "/patchRole/" + _id,
      { role },
      {
        headers: {
          Authorization: token,
        },
      }
    );    
  }
  patchSlide(_id, slide ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL +  "/patchSlide/" + _id,
      { slide },
      {
        headers: {
          Authorization: token,
        },
      }
    );    
  }
  patchReviews(_id, contentId ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL +  "/patchReviews/" + _id,
      { contentId },
      {
        headers: {
          Authorization: token,
        },
      }
    );    
  }
  patchCast(_id, cast ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL +  "/patchCast/" + _id,
      { cast },
      {
        headers: {
          Authorization: token,
        },
      }
    );    
  }
  patchFavoritePerson(_id, favoritePerson ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL +  "/patchFavoritePerson/" + _id,
      { favoritePerson },
      {
        headers: {
          Authorization: token,
        },
      }
    );    
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();