import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContentService from "../../services/content.service";
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;


const PostContentComponent = (props) => {
  const { movieId } = useParams();
  const [isLoading, setLoading] = useState(true);
  let [movieAll, setMovieAll] = useState(null);
  const MovieURL = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}&language=ja-JP`
  const search = async (URL1) => {
    let result = await axios.get(URL1);
    setMovieAll(result.data);
    setTMDBId(result.data.id);
    setLoading(false);
  };
  useEffect(()=>{
    search(MovieURL);  
  }, [])

  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [tags, setTags] = useState(0);
  let [message, setMessage] = useState("");
  let [TMDBId, setTMDBId] = useState("");
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
    ContentService.post(title, content, tags, TMDBId)
      .then(() => {
        window.alert("新課程已創建成功");
        navigate("/content");
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
          <p>在發文之前，您必須先成為付費會員。</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            立即付費。
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "free" && (
        <div>
          <p>只有付費會員可以發布新課程。</p>
        </div>
      )}
      {currentUser && (currentUser.user.role == "standard" || "premium") && (
        <div className="form-group">

          <div>{movieAll.name}</div>

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

          <br />
          <br />
          {message && (
            <div className="alert alert-warning" role="alert">
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostContentComponent;
