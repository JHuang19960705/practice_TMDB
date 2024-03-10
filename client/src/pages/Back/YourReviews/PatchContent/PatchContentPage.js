import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import ContentService from "../../../../services/content.service";
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function PatchContentPage({ currentUser }) {
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
      if (currentUser.user.role == "standard" || currentUser.user.role ==  "premium") {
        ContentService.getContentByContentId(contentId)
          .then((data) => {
            setContentData(data.data[0]);
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
        window.alert("修改成功");
        navigate(0);
      })
      .catch((error) => {
        setMessage(error.response);
      });
  };

  const handleDelete = async () => {
    try {
      await ContentService.delete(contentId);
      navigate("/back/yourReviews");
      setTimeout(()=>{navigate(0);},1)
    } catch (error) {
      setMessage(error.response);
    }
  };
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div class="box-border p-8">
      <img class="mb-5 rounded-2xl" src={ tmdbBaseURL + contentData.TMDBImg} />
      <div>
        <div class="mb-5 h-full">
          <label for="title"><div class="mb-2 ml-2 text-sm">標題</div></label>
          <input defaultValue = {title} onChange={handleChangeTitle} class="h-9 w-full cursor-text rounded-2xl bg-gray-50 pl-4 text-xs outline-none hover:border hover:border-blue-500" name="title" type="text" placeholder="Type Title..." />
        </div>
        <div class="mb-5 h-full">
          <label for="reviews"><div class="mb-2 ml-2 text-sm">內容</div></label>
          <textarea defaultValue = {content} onChange={handleChangeContent} rows="1" class="h-auto min-h-24 w-full cursor-text rounded-2xl bg-gray-50 pl-4 pt-2 text-xs outline-none hover:border hover:border-blue-500" id="reviews" name="reviews" placeholder="Type Here..."></textarea>
        </div>
        <div class="mb-5 h-full">
          <label for="tag"><div class="mb-2 ml-2 text-xs">TAG</div></label>
          <div class="relative">
            <input defaultValue = {tags} onChange={handleChangeTags} name="tag" type="text" class="h-9 w-full cursor-text rounded-2xl bg-gray-50 pl-4 text-xs outline-none hover:border hover:border-blue-500" id="tag" placeholder="Add New Tag..." />
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
          <button onClick={() => { patchContent() }} class="float-end rounded border border-blue-300 bg-blue-100 px-5 py-1 font-bold text-blue-500 shadow-sm">修改上傳</button>
          <Link to="reviewsComment" class="float-end rounded border border-green-50 bg-green-50 px-5 py-1 font-bold text-green-300 shadow-sm">查看回覆</Link>
          <button onClick={() => { handleDelete() }} class="float-end rounded border border-gray-200 bg-gray-50 px-5 py-1 font-bold text-gray-300 shadow-sm">刪除影評</button>
        </div>
        {message && (
          <div className="relative flex justify-center">
            <div className="absolute bottom-0 mx-auto bg-red-50 px-20 py-5 rounded-2xl" role="alert">{message}</div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  )
}
