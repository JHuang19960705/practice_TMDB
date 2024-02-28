import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ContentService from "../../../services/content.service";


export default function ReviewsContent({currentUser}) {
  const { TMDBId } = useParams();
  const [contentData, setContentData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    let _id;
    if (currentUser) {
      _id = TMDBId;
      if (currentUser.user.role ==  "standard" || currentUser.user.role ==  "premium") {
        ContentService.getReviewsByTMDBId(_id)
          .then((data) => {
            setContentData(data.data);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (currentUser.user.role == "free") {
        ContentService.getReviewsByTMDBId(_id)
          .then((data) => {
            setContentData(data.data);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  let last = contentData.length - 1;

  return (
    <div>
      <div className="blog-title">
        {contentData[last] && (
          <div>
            <div className="blog-title-text">
                <p>{contentData[last].title}</p>
            </div>
            <div className="blog-title-writer">
                <p>執筆: {contentData[last].writer.username}</p>
            </div>
            <div className="blog-title-date">
                <p>{contentData[last].date}</p>
            </div>
          </div>
        )} 
      </div>
      <div className="blog-content">
        <div className="blog-writer">
            <div className="writer-now">
                <div className="writer-wrap">
                    <div className="writer-pic">
                        <img src="{reviewOne.writer.img}" alt=""/>
                    </div>
                    <p></p>
                </div>
                <div className="blog-content-hr"><hr/></div>
                <div className="blog-tags">
                    {contentData[last] && (
                        <div><p>#{contentData[last].tags[0]}</p></div>        
                    )}
                </div>
            </div>  

            <div className="writer-next">

                <div className="writer-next-left">
                    <div className="writer-next-pic">
                        <img src="./img/user-account.png" alt=""/>
                    </div>
                </div>
                <div className="writer-next-right">
                    <div>
                        <span>是枝裕和さん</span><span>の感想・評価</span>
                    </div>
                </div>

            </div> 

            <div className="writer-next">

                <div className="writer-next-left">
                    <div className="writer-next-pic">
                        <img src="./img/user-account.png" alt=""/>
                    </div>
                </div>
                <div className="writer-next-right">
                    <div>
                        <span>黑澤明さん</span><span>の感想・評価</span>
                    </div>
                </div>

            </div> 

            <div className="writer-next">

                <div className="writer-next-left">
                    <div className="writer-next-pic">
                        <img src="./img/user-account.png" alt=""/>
                    </div>
                </div>
                <div className="writer-next-right">
                    <div>
                        <span>岩井俊二さん</span><span>の感想・評価</span>
                    </div>
                </div>

            </div> 
        </div>
        <div className="blog-article">
          {contentData[last] && (
            <div>
                <article className="blog-article-content">
                    <div className="blog-artical-pic">
                    <img src="" alt=""/>
                    </div>
                    {contentData[last].content} 
                </article>
                <div className="blog-article-more">
                    <p>閱讀全文</p>
                </div>   
            </div> 
          )}    
        </div>
      </div> 
    </div>
  )
}
