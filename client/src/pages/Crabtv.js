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

export const Crabtv = ({ currentUser, favoriteMovie }) => {
  return (
   <div>
    <Slide currentUser={currentUser} favoriteMovie={favoriteMovie}/>
    <div className='big-wrap'>
      <News favoriteMovie={favoriteMovie}/>
      <Character />
    </div>
    <Reviews favoriteMovie={favoriteMovie}/>
    <Appeal />
    <Theme favoriteMovie={favoriteMovie}/>
    <BestChoose />
    <Footer />
   </div>
  )
}


export default Crabtv;