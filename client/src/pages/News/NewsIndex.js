import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/news-index.css";
import axios from "axios";
import NewsPic from "../../components/NewsPic/NewsPic";
import NewsRanking from "../../components/NewsPic/NewsRanking";

export default function NewsIndex() {
  let [newsData, setNewsData] = useState(null);
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const newsURL = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=${NEWS_API_KEY}`
  const search = async() =>{
    let result = await axios.get(newsURL);
    setNewsData(result.data.articles);
  }
  useEffect(() => {
    search();
  }, [])
  return (
    <div className="cont">
      <div className="cont-left">
              
          {/* <!-- 標題header --> */}
          <div className="tit-box-main">
              <h2 className="tit">
                <p className="en">最新消息</p>
              </h2>
          </div>


          {/* <!-- 標籤 --> */}
          <div className="list-menu">
              <ul>
                  <li className="link-box link-def">
                      <Link to={``}>
                          <span>本週最新</span>
                      </Link>
                  </li>
                  <li className="link-box link-def">
                      <Link to={``}>
                          <span>公開情報</span>
                      </Link>
                  </li>
                  <li className="link-box link-def">
                      <Link to={``}>
                          <span>預告篇</span>
                      </Link>
                  </li>
                  <li className="link-box link-def">
                      <Link to={``}>
                          <span>特別映像</span>
                      </Link>
                  </li>
                  <li className="link-box link-def">
                      <Link to={``}>
                          <span>映画館NEWS</span>
                      </Link>
                  </li>
                  <li className="link-box link-def">
                      <Link to={``}>
                          <span>動畫NEWS</span>
                      </Link>
                  </li>

                  <li className="link-box link-def">
                      <Link to={``}>
                          <span>電視劇NEWS</span>
                      </Link>
                  </li>
                  <li className="link-box link-def">
                      <Link to={``}>
                          <span>音楽NEWS</span>
                      </Link>
                  </li>

              </ul>
          </div>

          {/* <!-- 新聞六個 --> */}
          <div className="article-list col-2-pc">
              <ul className="js-index-news-wrap">    
                {
                  newsData && 
                  newsData.slice(0, 6).map((news) => {
                    return <NewsPic news={news} />
                  })
                }
              </ul>
          </div>


          {/* <!-- 頁數 --> */}
          <div className="detail-pager-wrap">
              <ul className="pagerList" >
                  <li className="detail-pager pager-prev">
                      <Link href="?page=1"></Link>
                  </li>
                  <li className="detail-pager " data-pagenum="1">
                      <Link href="?page=1">
                          <span>
                              1 </span>
                      </Link>
                  </li>
                  <li className="detail-pager pager-active" data-pagenum="2">
                      <Link href="?page=2">
                          <span>
                              2 </span>
                      </Link>
                  </li>
                  <li className="detail-pager " data-pagenum="3">
                      <Link href="?page=3">
                          <span>
                              3 </span>
                      </Link>
                  </li>
                  <li className="detail-pager " data-pagenum="4">
                      <Link href="?page=4">
                          <span>
                              4 </span>
                      </Link>
                  </li>
                  <li className="detail-pager " data-pagenum="5">
                      <Link href="?page=5">
                          <span>
                              5 </span>
                      </Link>
                  </li>
                  <li className="detail-pager " data-pagenum="6">
                      <Link href="?page=6">
                          <span>
                              6 </span>
                      </Link>
                  </li>
                  <li className="detail-pager " data-pagenum="7">
                      <Link href="?page=7">
                          <span>
                              7 </span>
                      </Link>
                  </li>
                  <li className="detail-pager " data-pagenum="8">
                      <Link href="?page=8">
                          <span>
                              8 </span>
                      </Link>
                  </li>
                  <li className="detail-pager " data-pagenum="9">
                      <Link href="?page=9">
                          <span>
                              9 </span>
                      </Link>
                  </li>
                  <li className="detail-pager " data-pagenum="10">
                      <Link href="?page=10">
                          <span>
                              10 </span>
                      </Link>
                  </li>
                  <li className="detail-pager pager-next">
                      <Link href="?page=1017"></Link>
                  </li>
              </ul>
          </div>

      </div>
      {/* <!-- 排名 --> */}
      <div className="cont-right">
          <section className="col-ranking col-side-pc">
              <div className="tit-box-side">
                  <p className="tit-box-side-ranking">RANKING</p>
              </div>
              <ul className="js-index-news-right-wrap">
                {
                  newsData && 
                  newsData.slice(0, 10).map((news) => {
                    return <NewsRanking news={news} />
                  })
                }
              </ul>
          </section>
      </div>
</div>
  )
}
