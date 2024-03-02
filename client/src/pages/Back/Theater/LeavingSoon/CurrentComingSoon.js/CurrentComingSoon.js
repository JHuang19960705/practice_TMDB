import React, { useEffect, useState } from 'react'
import AuthService from '../../../../../services/auth.service';
import TheaterPic from '../../Component/TheaterPic';

export default function CurrentComingSoon({currentUser, setCurrentUser}) {
  const [userRecommend, setUserRecommend] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    AuthService.getUserRecommendById(currentUser.user._id)
      .then((data) => {
        setUserRecommend(data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentUser]);
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div id="carousel-wrap">
    <div id="carousel-container">
      <ul id="carousel" className="animate js-slider-wrap">
        {
          userRecommend.theater.leaving &&
          userRecommend.theater.leaving.map((TMDBId) => {         
            return <TheaterPic TMDBId={TMDBId} />
          })
        }
      </ul>
      <div id="controls">
        <span id="prev" className="js-slider-prev"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/prev.png"/></span>
        <span id="next" className="js-slider-next"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1014830/next.png"/></span>
      </div>
    </div>
  </div> 
  )
}
