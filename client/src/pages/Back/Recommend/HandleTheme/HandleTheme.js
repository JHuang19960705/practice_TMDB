import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../../services/auth.service";
import Theme from "./Theme/Theme";
import ChangeTheme from "./ChangeTheme/ChangeTheme";

export default function HandleTheme({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState([]);
  const [newThemeId, setNewThemeId] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setTheme(currentUser.user.theme)
    }
  }, [currentUser])

  const handleChangeOpen = () => {
    setIsOpen(true)
  }

  const handleChangeClose = () => {
    setIsOpen(false)
  }

  const checkIfDouble = (id) => {
    if (theme[0]) {
      if (!theme.includes(id)) {
        setTheme([...theme, id]);
        setIsOpen(false)
      } else {
        window.alert(`已經有${id}囉~`)
        setIsOpen(false)
      }
    } else {
      setTheme([...theme, id]);
      setIsOpen(false)
    }
  }

  const deleteTheme = (id) => {
    setTheme(theme.filter(t => t !== id))
  }

  const patchTheme = async (upDatedtheme) => {
    const newAllTheme = upDatedtheme;
    try {
      let response = await AuthService.patchTheme(currentUser.user._id, newAllTheme)
      window.alert("主題修改成功~");
      localStorage.setItem("user", JSON.stringify(response.data));
      setCurrentUser(AuthService.getCurrentUser());
      navigate(0);
    } catch (e) {
      setMessage(e.response.data);
    };
  }

  const genres = [
    {
      "id": "10759",
      "name": "動作片"
    },
    {
      "id": "16",
      "name": "動畫片"
    },
    {
      "id": "35",
      "name": "喜劇片"
    },
    {
      "id": "80",
      "name": "犯罪片"
    },
    {
      "id": "99",
      "name": "紀錄片"
    },
    {
      "id": "18",
      "name": "戲劇片"
    },
    {
      "id": "10751",
      "name": "闔家片"
    },
    {
      "id": "10762",
      "name": "兒童片"
    },
    {
      "id": "9648",
      "name": "懸疑片"
    },
    {
      "id": "10765",
      "name": "科幻片"
    }]

  return (
    <div>
      <div className="sticky left-0 top-0 z-10">
        <div className="dark:bg-gray-800 flex w-full flex-col items-center rounded-b-3xl bg-white p-3 shadow">
          {!theme[0] && <div className="text-center">你還沒選擇推薦的主題唷~<br />▼快來選▼</div>}
          {theme[0] && <button onClick={() => { patchTheme(theme) }} className="mb-5 border border-blue-500 px-3 text-blue-500">確定</button>}
          <div className="flex flex-wrap justify-center max-h-24 overflow-y-auto">
            {theme && genres &&
              theme.map((t) => {
                return (
                  <div>
                    {genres.map((g) => {
                      if (g.id == t) {
                        return (
                          <div className="mb-3 mr-3 rounded-md bg-gray-200 dark:bg-gray-950 px-4 py-1 w-24 flex cursor-default items-center justify-between">
                            <span className="w-16 truncate">{g.name}</span>
                            <svg onClick={() => { deleteTheme(g.id) }} xmlns="http://www.w3.org/2000/svg" className="ml-2 h-full w-4 transform cursor-pointer text-gray-600 dark:text-gray-100 transition duration-300 hover:scale-150 hover:text-blue-700 active:scale-50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </div>
                        )
                      }
                    })}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <section className="archive">
        <div>
          {genres && genres.map((g) => {
            return <Theme genre={g} setNewThemeId={setNewThemeId} handleChangeOpen={handleChangeOpen} />
          })}
        </div>
      </section>
      {
        isOpen &&
        <ChangeTheme newThemeId={newThemeId} checkIfDouble={checkIfDouble} handleChangeClose={handleChangeClose} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      }
    </div >
  )
}
