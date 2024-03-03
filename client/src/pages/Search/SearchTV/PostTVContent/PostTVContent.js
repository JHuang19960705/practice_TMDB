import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContentService from "../../../../services/content.service";
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function PostTVContent ({ currentUser, setCurrentUser }) {
  const { TMDBId } = useParams();
  const [isLoading, setLoading] = useState(true);
  let [tvAll, setTVAll] = useState(null);
  let [getTMDBId, setGetTMDBId] = useState("");
  let [TMDBImg, setTMDBImg] = useState("");

  const TVURL = `https://api.themoviedb.org/3/tv/${TMDBId}?api_key=${API_KEY}`
  
  const search = async (URL1) => {
    let result = await axios.get(URL1);
    setTVAll(result.data);
    setGetTMDBId(result.data.id);
    result.data.backdrop_path && (
      setTMDBImg(result.data.backdrop_path)
    )
    setLoading(false);
  };

  useEffect(()=>{
    search(TVURL);  
  }, [])

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [tags, setTags] = useState(0);
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleChangeTags = (e) => {
    setTags(e.target.value);
  };
  const postContent = () => {
    ContentService.post(title, content, tags, getTMDBId, TMDBImg)
      .then(() => {
        window.alert("您的影評成功上傳");
        navigate("/back/yourReviews");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>在發文之前，您必須先加入會員。</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            立即加入會員。
          </button>
        </div>
      )}
        <div className="form-group">

          <div>{tvAll.name}</div>

          <label for="exampleforTitle">文章標題：</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleforTitle"
            onChange={handleChangeTitle}
          />
          <br />

          <label for="exampleforContent">內容：</label>
          <textarea
            className="form-control"
            id="exampleforContent"
            aria-describedby="emailHelp"
            name="content"
            onChange={handleChangeContent}
          />
          <br />

          <label for="exampleforPrice">TAG</label>
          <input
            name="price"
            type="text"
            className="form-control"
            id="exampleforPrice"
            onChange={handleChangeTags}
          />
          <br />

          <button className="btn btn-primary" onClick={postContent}>
            刊登發表
          </button>


          <img src={ tmdbBaseURL + TMDBImg} />

          <br />
          <br />
          {message && (
            <div className="alert alert-warning" role="alert">
              {message}
            </div>
          )}
        </div>
    </div>
  );
};
