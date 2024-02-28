import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentService from "../../../../services/content.service";
import AuthService from "../../../../services/auth.service";

export default function HandleReview({ reviewDisplay, currentUser, setCurrentUser }) {
  let [message, setMessage] = useState("");
  let [contentId, setContentId] = useState([]);
  const navigate = useNavigate();
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

  const handleReviews = (e) => {
    let contentIdfront = e.currentTarget.dataset.contentId;
    setContentId([...contentId, contentIdfront]);
  }

  const handlePatchReviews = async() => {
    console.log(contentId);
    try{  
      let response = await AuthService.patchReviews(currentUser.user._id, contentId)
      window.alert("修改成功。您現在將被導向到電影大廳");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/crabtv");
    } catch (e) {
      setMessage(e.response.data);
    };
  }
  
  return (
    <div style={{display:`${reviewDisplay}`}}>
      <div className="d-flex justify-content-around">
        <button onClick={handlePatchReviews} className="btn btn-primary">把影評放到前台</button>
      </div>
      {currentUser && contentData && contentData.length != 0 &&(
        <div className="justify-content-center" style={{ display: "flex", flexWrap: "wrap" }}>
          {contentData.map((content) => {
            return (
              <div className="card" style={{ width: "18rem", margin: "1rem" }}>
                <div className="card-body">
                  <div>
                    <h5 className="card-title">文章題目:{content.title}</h5>
                    <button onClick={handleReviews} data-content-id={content._id} className="btn btn-light btn-sm">選取reviews</button>
                  </div>
                  <textarea style={{ margin: "1rem 0rem", height:"100px"}} className="card-text">
                    {content.content}
                  </textarea>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    回應人數: {content.commenters.length}
                  </p>
                  <p style={{ margin: "0.5rem 0rem" }}>
                    TAG: {content.tags}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}  
    </div>
  )
}
