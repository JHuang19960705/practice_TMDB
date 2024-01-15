import React from 'react';
import Slide from '../components/CRABTV/Slide/Slide';
import Reviews from '../components/CRABTV/Reviews/Reviews';
import BestChoose from '../components/CRABTV/BestChoose';
import Theme from '../components/CRABTV/Theme/Theme';
import Appeal from '../components/CRABTV/Appeal';
import PlanPrice from "../components/CRABTV/PlanPrice";
import Question from "../components/CRABTV/Question";
import News from '../components/CRABTV/News/News';
import Character from '../components/CRABTV/Character/Character';
import Footer from '../components/CRABTV/Footer';
import "../styles/crab.css";

export const Crabtv = ({ favoriteMovie }) => {
  return (
   <div>
    <Slide favoriteMovie={favoriteMovie}/>
    <div className='big-wrap'>
      <News favoriteMovie={favoriteMovie}/>
      <Character />
    </div>
    <Reviews favoriteMovie={favoriteMovie}/>
    <Appeal />
    <Theme favoriteMovie={favoriteMovie}/>
    <BestChoose />
    <PlanPrice />
    <Question />
    <Footer />
   </div>
  )
}


export default Crabtv;