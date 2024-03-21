import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slide from './Slide/Slide';
import Character from './Character/Character';
import Reviews from './Reviews/Reviews';
import BestChoose from './BestChoose/BestChoose';
import Theme from './Theme/Theme';
import AuthService from '../../../../services/auth.service';
import "../../../../styles/crab.css";

export default function UserRecommend () {
  const {userId} = useParams()
  const [userRecommend, setUserRecommend] = useState();

  useEffect(() => {
    AuthService.getUserRecommendById(userId)
      .then((data) => {
        setUserRecommend(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <Slide userRecommend={userRecommend} />
      <Character userRecommend={userRecommend}/>
      <Reviews userRecommend={userRecommend}/>
      <Theme userRecommend={userRecommend}/>
      <BestChoose userRecommend={userRecommend}/>
    </div>
  )
}