import React, { useState } from 'react'
import AuthService from '../../../../../services/auth.service';

export default function ChangeFavorite({newFavorite, oldFavorite, handleChangeClose2, favorite, currentUser, setCurrentUser, handleChangeClose1}) {
  const [message, setMessage] = useState("");
  
  const ChangeServerFavorite = async(choosedFavorite) => {
    favorite = choosedFavorite;
    try{  
      let response = await AuthService.patchFavoritePerson(currentUser.user._id, choosedFavorite)
      window.alert("修改成功~");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      handleChangeClose2();
      handleChangeClose1();
    } catch (e) {
      setMessage(e.response.data);
    };
  }

  return (
    <div className="bg-white box-border p-5 rounded-xl shadow-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 z-10 flex flex-col">
      <div>
        {newFavorite && oldFavorite && <div className="text-left">把{oldFavorite.name}換成{newFavorite.name}</div>}
      </div>
      <div className="flex justify-end mt-6 w-full">
        <button onClick={handleChangeClose2} className="w-1/3 bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4 rounded">取消</button>
        <button onClick={() => {ChangeServerFavorite(newFavorite.id)}} className="w-1/3 bg-green-500 text-white px-3 py-1 rounded-md">確定</button>
      </div>
    </div>
  )
}
