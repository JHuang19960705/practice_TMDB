import axios from "axios";
const API_URL = "https://practice-tmdb-server.vercel.app/user";

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
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();