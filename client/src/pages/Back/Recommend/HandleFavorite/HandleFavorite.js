import React, { useState, useEffect } from "react";
import Favorite from "./Favorite/Favorite";
import "../../../../styles/celebrity-index.css";
import SearchFavorite from "./SearchFavorite/SearchFavorite";
import ChangeFavorite from "./ChangeFavorite/ChangeFavorite";

export default function HandleFavorite({currentUser, setCurrentUser}) {
  const [isLoading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState("");
  const [newFavorite, setNewFavorite] = useState("");
  const [oldFavorite, setOldFavorite] = useState("")
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  
  useEffect(() => {
    if(currentUser){
      setFavorite(currentUser.user.favoritePerson)
      setLoading(false);
    }
  },[currentUser])

  const handleChangeOpen1 = () => {
    setIsOpen1(true)
  }

  const handleChangeClose1 = () => {
    setIsOpen1(false)
  }

  const handleChangeOpen2 = () => {
    setIsOpen2(true)
  }

  const handleChangeClose2 = () => {
    setIsOpen2(false)
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
    <section className="archive">
      { favorite && currentUser && 
        <div>
          <Favorite key={currentUser.user.favoritePerson} favoriteId={currentUser.user.favoritePerson} setOldFavorite={setOldFavorite} handleChangeOpen1={handleChangeOpen1} />
        </div>  
      }
    </section>
    { isOpen1 &&
      <SearchFavorite setNewFavorite={setNewFavorite} handleChangeOpen2={handleChangeOpen2} handleChangeClose2={handleChangeClose2} handleChangeClose1={handleChangeClose1}/>
    }
    { isOpen2 &&
      <ChangeFavorite newFavorite={newFavorite} oldFavorite={oldFavorite} favorite={favorite} handleChangeClose1={handleChangeClose1} handleChangeClose2={handleChangeClose2} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }
  </div>
  )
}
