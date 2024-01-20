import axios from "axios";
const API_URL = "http://localhost:3999/api/content";

class ContentService {
  
  //發文
  post(title, content, tags, TMDBId, TMDBImg) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      { title, content, tags, TMDBId, TMDBImg },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // 刪文
  delete( _id ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.delete(API_URL +  "/" + _id,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // 改文
  patch( _id, title, content, tags ) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.patch(
      API_URL +  "/" + _id,
      { title, content, tags },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // 以TMDBId，找到所有發文
  getReviewsByTMDBId(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/findByTMDBId/" + _id,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // 以文章Id，找到發文
  getContentByContentId(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/findByContentId/" + _id,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // 以用戶id，找到回文
  getEnrolledContents(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_URL + "/student/" + _id,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // 以用戶id，找到發文
  get(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_URL + "/writer/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }

  getContentByName(name) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_URL + "/findByName/" + name, {
      headers: {
        Authorization: token,
      },
    });
  }

  enroll(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL + "/enroll/" + _id,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new ContentService();
