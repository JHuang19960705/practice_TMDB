import React from 'react'

export default function ChangeTheme({handleChangeClose, newThemeId, checkIfDouble, currentUser, setCurrentUser}) {
  
  return (
    <div className="bg-white box-border p-5 rounded-xl shadow-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 z-20 flex flex-col">
      <div>
        {newThemeId && <div className="text-left">把{newThemeId}加到推薦的主題裡</div>}
      </div>
      <div className="flex justify-end mt-6 w-full">
        <button onClick={handleChangeClose} className="w-1/3 bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4 rounded">取消</button>
        <button onClick={() => {checkIfDouble(newThemeId)}}  className="w-1/3 bg-green-500 text-white px-3 py-1 rounded-md">確定</button>
      </div>
    </div>
  )
}
