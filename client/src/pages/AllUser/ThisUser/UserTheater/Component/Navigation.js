import React from "react";

export default function Navigation({ toggleOpen }) {
  
  return (
    <div className="navigation navigation-start" >
      <ul className="navigation_list" >
          <li className="navigation_item"  >
              <button onClick={() => toggleOpen(1)} className="navigation_link link-exact-active link-active" >
                  <div className="navigation_index" >1</div>
                  <div className="navigation_content" >
                      <div className="_main" >現正熱播</div>
                  </div>
              </button>
          </li>
          <li className="navigation_item"  >
            <button onClick={() => toggleOpen(2)} className="navigation_link"  >
              <div className="navigation_index" >2</div>
              <div className="navigation_content" >
                <div className="_main" >準備下檔電影</div>
              </div>
            </button>
          </li>
          <li className="navigation_item" >
            <button onClick={() => toggleOpen(3)} className="navigation_link" >
              <div className="navigation_index" >3</div>
              <div className="navigation_content"  >
                <div className="_main"  >下個月上映電影</div>
              </div>
            </button>
          </li>
      </ul>
    </div>
  )
}
