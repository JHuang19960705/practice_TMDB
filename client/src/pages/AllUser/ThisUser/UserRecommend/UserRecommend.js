import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slide from './Slide/Slide';
import News from './News/News';
import Character from './Character/Character';
import Reviews from './Reviews/Reviews';
import BestChoose from './BestChoose/BestChoose';
import Theme from './Theme/Theme';
import "../../../../styles/crab.css";
import AuthService from '../../../../services/auth.service';

export default function Crabtv () {
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
    <div className='big-wrap'>
      {/* <News /> */}
      {/* <Character userRecommend={userRecommend}/> */}
    </div>
    <Reviews userRecommend={userRecommend}/>
    {/* <Theme userRecommend={userRecommend}/> */}
    <BestChoose userRecommend={userRecommend}/>
    </div>
  )
}