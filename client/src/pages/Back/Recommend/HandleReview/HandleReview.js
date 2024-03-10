import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../../services/auth.service";
import Review from "./Review/Review";
import ChangeReview from "./ChangeReview/ChangeReview";
import ContentService from "../../../../services/content.service"

export default function HandleReview({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [recommendReviews, setRecommendReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [newReview, setNewReview] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(currentUser){
      getAllReviews()
    }
  }, [currentUser])

  
  
  const getAllReviews = () => {
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
        ContentService.getContentByUserId(_id)
          .then((data) => {
            setAllReviews(data.data);
            setRecommendReviews(data.data)
            getRecommendReviews()
          })
          .catch((e) => {
            console.log(e);
          });
    }
  }

  const getRecommendReviews = () => {
    setRecommendReviews(prevReviews => prevReviews.filter(r => currentUser.user.contentId.includes(r._id)));
  }

  const handleChangeOpen = () => {
    setIsOpen(true)
  }

  const handleChangeClose = () => {
    setIsOpen(false)
  }

  const checkIfDouble = (newR) => {
    if (recommendReviews[0]){
      if(!recommendReviews.includes(newR)){
        setRecommendReviews([...recommendReviews, newR]);
        setIsOpen(false)
      }else{
        window.alert(`已經有${newR.title}囉~`)
        setIsOpen(false)
      }
    }else{
      setRecommendReviews([...recommendReviews, newR]);
      setIsOpen(false)
    }
  }

  const deleteReview = (id) => {
    setRecommendReviews(recommendReviews.filter(r => r !== id))
  }

  const patchReview = async(upDatedRecommendReviewsId) => {
    const newAllReviewsId = upDatedRecommendReviewsId;
    try{  
    let response = await AuthService.patchReviews(currentUser.user._id, newAllReviewsId)
    window.alert("主題修改成功~");
    localStorage.setItem("user", JSON.stringify(response.data));
    setCurrentUser(AuthService.getCurrentUser());
    navigate(0);
    } catch (e) {
      setMessage(e.response.data);
    };

  }

  return (
    <div>
      <div className="sticky left-0 top-0 z-10">
        <div className="flex w-full flex-col items-center overflow-hidden rounded-b-3xl bg-white p-3 shadow">
          {!recommendReviews[0] && <div className="text-center">你還沒選擇要推薦的影評唷~<br/>▼快來選▼</div>}
          {recommendReviews[0] && <button onClick={() => { patchReview(recommendReviews) }} className="mb-5 border border-blue-500 px-3 text-blue-500">確定</button>}
          <div className="flex flex-wrap justify-center">
            {recommendReviews &&
              recommendReviews.map((r) => {
                return <button onClick={() => {deleteReview(r)}} className="mb-3 mr-3 rounded-md bg-gray-200 px-4 py-1 w-28 truncate">{r.title}</button>
              })
            }
          </div>
        </div>
      </div>
      <section className="archive">
        <div>
          {allReviews && allReviews.map((r) => {
            return <Review review={r} setNewReview={setNewReview} handleChangeOpen={handleChangeOpen}/>
          })}
        </div>  
      </section>
      {isOpen &&
        <ChangeReview newReview={newReview} checkIfDouble={checkIfDouble} handleChangeClose={handleChangeClose} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      }
    </div>
  )
}
