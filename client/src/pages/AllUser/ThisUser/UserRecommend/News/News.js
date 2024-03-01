import React, { useState, useEffect } from "react";
import NewsPic from './NewsPic';
import axios from "axios";

export default function News() {
  const [isLoading, setLoading] = useState(true);   
  let [newsData, setNewsData] = useState(null);
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const newsURL = `https://gnews.io/api/v4/top-headlines?country=jp&category=entertainment&apikey=${NEWS_API_KEY}`
  const search = async() =>{
    let result = await axios.get(newsURL);
    setNewsData(result.data.articles);
    setLoading(false);
  }
  useEffect(() => {
    search();
  }, [])
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div>
      <div className="news-container">
        <div className="news-all">
          <button target="_blank">
            <div className="news-title">最新消息 ／</div>
          </button>
          <div className="news-all-wrap js-news-all-wrap">
            {
              newsData && 
              newsData.slice(6, 12).map((news) => {
                if (news.image) {
                  return <NewsPic news={news}/>
                }
              })
            }
          </div>
        </div>
        <div className="view-all">
          <button target="_blank">
            <span>VIEW ALL</span>
          </button>
        </div>
      </div>

      <div className="news-controls">
        <span className="news-prev  js-news-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
        <span className="news-next  js-news-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
      </div>
    </div>
  )
}