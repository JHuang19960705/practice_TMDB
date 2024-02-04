import React, { useState, useEffect } from "react";
import NewsPic from '../../../components/NewsPic/NewsPic'
import "../../../styles/news-index.css";
import axios from "axios";
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;



export default function HandleNews() {
  const [isLoading, setLoading] = useState(true);    
  let [newsData, setNewsData] = useState(null);
  let newsURL = `https://gnews.io/api/v4/top-headlines?country=jp&category=entertainment&page=1&max=10&apikey=${NEWS_API_KEY}`
  const search = async(URL) =>{
    let result = await axios.get(URL);
    setNewsData(result.data.articles);
    setLoading(false);
  }
  useEffect(() => {
    search(newsURL);
  }, [])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div>
      {/* <!-- 新聞六個 --> */}
      <div className="article-list col-2-pc">
        <ul className="js-index-news-wrap">    
          {
            newsData && 
            newsData.map((news) => {
              return <NewsPic news={news} />
            })
          }
        </ul>
      </div>
    </div>
  )
}
