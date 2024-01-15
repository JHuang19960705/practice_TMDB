import React from 'react';
import ReviewsContent from '../../components/Shopping/ReviewsContent';
import "../../styles/reviews-page.css";

export default function Reviews({currentUser}) {
  return (
    
    <div className="blog-wrap">
        <div className="blog-left js-reviews-page-wrap">
          <ReviewsContent currentUser={currentUser}/>
        </div>

        <div className="blog-right">
            <div className="blog-right-aside">
                <div className="blog-music-calendar">
                    <p className="blog-year-jp">令和五年</p>
                    <p className="blog-year">2023</p>
                    <p className="blog-month">九月</p>
                    <p className="blog-day">10</p>
                    <p className="blog-week">Sunday</p>
                </div>
                <div>
                    <div className="blog-music">
                    <div className="blog-music-title">
                        <p>本日のおすすめ音楽はこちら！</p>
                    </div>
                    <div className="blog-music-wrap">
                        <li><p>水曜日のカンパネラ ー アリス</p></li>
                        <li><p>藤井風 ー まつり</p></li>
                        <li><p>GReeeeN ー 花唄</p></li>
                        <li><p>ヨルシカ ー 雲と幽霊</p></li>
                        <li><p>変態紳士クラブ ー Sorry</p></li>
                        <li><p>BUMP OF CHICKEN ー </p></li>
                        <li><p>宇多田光 ー </p></li>
                        <li><p>さユり ー 花の塔</p></li>
                        <li><p>King Gnu ー Vinyl</p></li>
                        <li><p>Salyu ー 星のクズ α</p></li>
                    </div>
                    </div>
                    <div className="blog-right-aside-button">
                    <p>もっと音楽を見る</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
