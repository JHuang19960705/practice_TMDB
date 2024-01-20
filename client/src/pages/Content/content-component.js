import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentService from "../../services/content.service";
import AuthService from "../../services/auth.service";

const ContentComponent = ({ currentUser, setCurrentUser }) => {
  let [message, setMessage] = useState("");
  let [slideImg, setSlideImg] = useState([]);
  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const [contentData, setContentData] = useState(null);
  useEffect(() => {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
      if (currentUser.user.role ==  "standard" || currentUser.user.role ==  "premium") {
        ContentService.get(_id)
          .then((data) => {
            setContentData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "free") {
        ContentService.getEnrolledContents(_id)
          .then((data) => {
            console.log(data);
            setContentData(data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, []);

  const handleComment = (e) => {
    let _id = e.currentTarget.dataset.id;
    navigate(`/comment/${_id}`);
  }

  const handlePatch = (e) => {
    let _id = e.currentTarget.dataset.id;
    navigate(`/patchContent/${_id}`);
  }

  const handleDelete = (e) => {
    let _id = e.currentTarget.dataset.id;
    ContentService.delete( _id )
      .then(() => {
        window.alert("刪除成功");
        navigate(0);
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  }

  const handleSlide = (e) => {
    let TMDBImg = e.currentTarget.dataset.tmdbImg;
    setSlideImg([...slideImg, TMDBImg]);
  }

  const handlePatchSlide = async() => {
    console.log(slideImg);
    try{  
      let response = await AuthService.patchSlide(currentUser.user._id, slideImg)
      window.alert("修改成功。您現在將被導向到電影大廳");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/crabtv");
    } catch (e) {
      setMessage(e.response.data);
    };
  }

  return (
    <div style={{ padding: "3rem" }}>
      {message && (
        <div className="alert alert-warning" role="alert">
          {message}
        </div>
      )}   
      {!currentUser && (
        <div>
          <p>您必須先登入才能看到課程。</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            回到登入頁面
          </button>
        </div>
      )}
      {currentUser && (currentUser.user.role == "standard" || "premium") && (
        <div className="d-flex justify-content-center">
          <button onClick={handlePatchSlide} className="btn btn-primary">把文章放到電影大廳</button>
        </div>
      )}
      {currentUser && currentUser.user.role == "free" && (
        <div>
          <h1>立即加入會員創作新文章。</h1>
        </div>
      )}
      {currentUser && contentData && contentData.length != 0 &&(
        <div className="justify-content-center" style={{ display: "flex", flexWrap: "wrap" }}>
          {contentData.map((content) => {
            return (
              <div className="card" style={{ width: "18rem", margin: "1rem" }}>
                <div className="card-body">
                  <div>
                    <h5 className="card-title">文章題目:{content.title}</h5>
                    <button onClick={handleSlide} data-tmdb-img={content.TMDBImg} className="btn btn-light btn-sm">選取</button>
                  </div>
                  <p style={{ margin: "1rem 0rem", overflow: "hidden",  display: "-webkit-box",  WebkitBoxOrient: "vertical",  WebkitLineClamp: "10"}} className="card-text">
                    {content.content}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    回應人數: {content.commenters.length}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    TAG: {content.tags}
                  </p>
                </div>
                <div style={{display: "flex", justifyContent: "space-around", margin: "1rem 0rem"}}>
                  <button onClick={handleComment} data-id={content._id} className="btn btn-success">回覆</button>
                  <button onClick={handlePatch} data-id={content._id} className="btn btn-secondary">更改</button>
                  <button onClick={handleDelete} data-id={content._id} className="btn btn-danger">刪除</button>
                </div>
              </div>
            );
          })}
        </div>
      )}  
    </div>
  );
};

export default ContentComponent;
