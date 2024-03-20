import React, { useState } from 'react'
import AuthService from '../../../../../services/auth.service';

export default function ChangeCast({newCast, oldCast, handleChangeClose2, castAll, currentUser, setCurrentUser, handleChangeClose1}) {
  const [message, setMessage] = useState("");

  const handleChangeCast = (oldCast, newCast) => {
    if (castAll.cast1 == oldCast){
      castAll.cast1 = newCast;
      ChangeServerCast();
    } else if (castAll.cast2 == oldCast) {
      castAll.cast2 = newCast;
      ChangeServerCast();
    } else if (castAll.cast3 == oldCast) {
      castAll.cast3 = newCast;
      ChangeServerCast();
    } else if (castAll.cast4 == oldCast) {
      castAll.cast4 = newCast;
      ChangeServerCast();
    }
  }

  const ChangeServerCast = async() => {
    try{  
      let response = await AuthService.patchCast(currentUser.user._id, castAll)
      window.alert("修改成功。您現在將被導向到個人資料頁面");
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
        {newCast && oldCast && <div className="text-left">把{oldCast.name}換成{newCast.name}</div>}
      </div>
      <div className="flex justify-end mt-6 w-full">
        <button onClick={handleChangeClose2} className="w-1/3 bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4 rounded">取消</button>
        <button onClick={() => {handleChangeCast(oldCast.id, newCast.id)}} className="w-1/3 bg-green-500 text-white px-3 py-1 rounded-md">確定</button>
      </div>
    </div>
  )
}
