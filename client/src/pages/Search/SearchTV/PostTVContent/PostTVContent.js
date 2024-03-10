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
    <div class="box-border p-8">
    <img class="mb-5 rounded-2xl" src={ tmdbBaseURL + TMDBImg} />
    <div>
      <div class="mb-5 h-full">
        <label for="title"><div class="mb-2 ml-2 text-sm">標題</div></label>
        <input onChange={handleChangeTitle} class="h-9 w-full cursor-text rounded-2xl bg-gray-50 pl-4 text-xs outline-none hover:border hover:border-blue-500" name="title" type="text" placeholder="Type Title..." />
      </div>
      <div class="mb-5 h-full">
        <label for="reviews"><div class="mb-2 ml-2 text-sm">內容</div></label>
        <textarea onChange={handleChangeContent} rows="1" class="h-auto min-h-24 w-full cursor-text rounded-2xl bg-gray-50 pl-4 pt-2 text-xs outline-none hover:border hover:border-blue-500" id="reviews" name="reviews" placeholder="Type Here..."></textarea>
      </div>
      <div class="mb-5 h-full">
        <label for="tag"><div class="mb-2 ml-2 text-xs">TAG</div></label>
        <div class="relative">
          <input onChange={handleChangeTags} name="tag" type="text" class="h-9 w-full cursor-text rounded-2xl bg-gray-50 pl-4 text-xs outline-none hover:border hover:border-blue-500" id="tag" placeholder="Add New Tag..." />
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-1.5 h-6 w-6 transform cursor-pointer text-gray-300 transition duration-300 hover:scale-110 hover:text-blue-700 active:scale-50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </div>
        <div class="mt-2 flex max-h-40 flex-wrap overflow-y-auto">
          {/* <div class="mb-3 mr-3 flex cursor-pointer items-center justify-between rounded-xl border px-3 py-1 text-xs hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500">
            <span>tasdadsbs</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-full w-3 transform cursor-pointer text-gray-600 transition duration-300 hover:scale-150 hover:text-blue-700 active:scale-50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div> */}
        </div>
      </div>
      <div class="mb-5 h-5">
        <button onClick={() => { postContent() }} class="float-end rounded border border-blue-300 bg-blue-100 px-5 py-1 font-bold text-blue-500 shadow-sm">刊登發表</button>
      </div>
      {message && (
        <div className="relative flex justify-center">
          <div className="absolute bottom-0 mx-auto bg-red-50 px-20 py-5 rounded-2xl" role="alert">{message}</div>
        </div>
      )}
    </div>
  </div>
  );
};
