import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import ProfileComponent from './Profile/profile-component';


export default function Homepage({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!currentUser){ 
      navigate("/firstEnroll");
    }
  })

  return (
    <div>
      {currentUser && (
        <ProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </div>
  )
}
