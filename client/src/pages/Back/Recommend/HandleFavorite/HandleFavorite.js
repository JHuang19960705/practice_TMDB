import React, { useState, useEffect } from "react";
import Favorite from "./Favorite/Favorite";
import SearchFavorite from "./SearchFavorite/SearchFavorite";
import ChangeFavorite from "./ChangeFavorite/ChangeFavorite";

export default function HandleFavorite({ currentUser, setCurrentUser }) {
  const [isLoading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(null);
  const [newFavorite, setNewFavorite] = useState("");
  const [oldFavorite, setOldFavorite] = useState("")
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  useEffect(() => {
    // 如果有當前用戶，設置喜愛的人物，並且結束加載狀態
    if (currentUser) {
      setFavorite(currentUser.user.favoritePerson)
      setLoading(false);
    }
  }, [currentUser])

  // 打開第一個彈出視窗
  const handleChangeOpen1 = () => {
    setIsOpen1(true)
  }

  // 關閉第一個彈出視窗
  const handleChangeClose1 = () => {
    setIsOpen1(false)
  }

  // 打開第二個彈出視窗
  const handleChangeOpen2 = () => {
    setIsOpen2(true)
  }

  // 關閉第二個彈出視窗
  const handleChangeClose2 = () => {
    setIsOpen2(false)
  }

  // 如果正在加載，顯示Loading...
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <section className="archive">
        {favorite && currentUser &&
          <Favorite key={favorite} favoriteId={favorite} setOldFavorite={setOldFavorite} handleChangeOpen1={handleChangeOpen1} />
        }
      </section>
      {isOpen1 &&
        <SearchFavorite setNewFavorite={setNewFavorite} handleChangeOpen2={handleChangeOpen2} handleChangeClose2={handleChangeClose2} handleChangeClose1={handleChangeClose1} />
      }
      {isOpen2 &&
        <ChangeFavorite newFavorite={newFavorite} oldFavorite={oldFavorite} favorite={favorite} handleChangeClose1={handleChangeClose1} handleChangeClose2={handleChangeClose2} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      }
    </div>
  )
}
