import React from 'react';
import Slide from '../components/CRABTV/Slide/Slide';
import Reviews from '../components/CRABTV/Reviews/Reviews';
import BestChoose from '../components/CRABTV/BestChoose';
import Theme from '../components/CRABTV/Theme/Theme';
import Appeal from '../components/CRABTV/Appeal';
import News from '../components/CRABTV/News/News';
import Character from '../components/CRABTV/Character/Character';
import Footer from '../components/CRABTV/Footer';
import "../styles/crab.css";

export const Crabtv = ({currentUser}) => {
  return (
   <div>
    <Slide currentUser={currentUser} />
    <div className='big-wrap'>
      <News />
      <Character currentUser={currentUser} />
    </div>
    <Reviews currentUser={currentUser} />
    <Appeal />
    <Theme currentUser={currentUser} />
    <BestChoose currentUser={currentUser}  />
    <Footer/>
   </div>
  )
}


export default Crabtv;