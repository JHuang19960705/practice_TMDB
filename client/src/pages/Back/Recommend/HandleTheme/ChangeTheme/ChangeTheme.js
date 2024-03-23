import React from 'react'

export default function ChangeTheme({handleChangeClose, newThemeId, checkIfDouble, currentUser, setCurrentUser}) {
  
  return (
    <div className="bg-white dark:bg-gray-900 box-border p-5 rounded-xl shadow-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-2/5 z-10 flex flex-col">
      <div>
        {newThemeId && <div className="text-left">把{newThemeId}加到推薦的主題裡</div>}
      </div>
      <div className="flex justify-center mt-6 w-full md:justify-end text-nowrap">
        <button onClick={handleChangeClose} className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-2 py-1 rounded-md">取消</button>
        <button onClick={() => {checkIfDouble(newThemeId)}}  className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md">確定</button>
      </div>
    </div>
  )
}
