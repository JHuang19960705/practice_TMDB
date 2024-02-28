import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContentService from "../../../../services/content.service";

export default function PatchContentPage(props) {
  let { currentUser, setCurrentUser, clickContent, setClickContent } = props;
  const navigate = useNavigate();
  const {contentId} = useParams();
  const [contentData, setContentData] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState(0);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);  

  useEffect(() => {
    if (currentUser) {
      if (currentUser.user.role ==  "standard" || currentUser.user.role ==  "premium") {
        ContentService.getContentByContentId(contentId)
          .then((data) => {
            setContentData(data.data);
            setTitle(data.data[0].title);
            setContent(data.data[0].content);
            setTags(data.data[0].tags);
            setLoading(false); 
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "free") {
        window.alert("你不是該篇文章的主人。您現在將被重新導向到首頁。");
        navigate("/");
      }
    }
  }, []);

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
  const patchContent = () => {
    ContentService.patch( contentId , title, content, tags)
      .then(() => {
        window.alert("文章修改成功");
        navigate(0);
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
          <label for="exampleforTitle">文章標題：</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleforTitle"
            onChange={handleChangeTitle}
            defaultValue = {title}
          />
          <br />

          <label for="exampleforContent">內容：</label>
          <textarea
            className="form-control"
            id="exampleforContent"
            aria-describedby="emailHelp"
            name="content"
            onChange={handleChangeContent}
            defaultValue = {content}
          />
          <br />

          <label for="exampleforPrice">TAG</label>
          <input
            name="price"
            type="text"
            className="form-control"
            id="exampleforPrice"
            onChange={handleChangeTags}
            defaultValue = {tags}
          />
          <br />

          <button className="btn btn-primary" onClick={patchContent}>
            修改文章
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
  )
}
