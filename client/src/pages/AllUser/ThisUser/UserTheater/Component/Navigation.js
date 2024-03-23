import React, { useState } from "react";

export default function Navigation({ toggleOpen }) {
  const [selectedLink, setSelectedLink] = useState("現正熱播");

  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName);
  };
  
  return (
    <div className="navigation navigation-start" >
      <ul className="navigation_list" >
          <li className="navigation_item"  >
              <button onClick={() => {toggleOpen(1); handleLinkClick("現正熱播")}} className={`navigation_link ${selectedLink === "現正熱播" ? "link-exact-active" : "" }`} >
                  <div className="navigation_index" >1</div>
                  <div className="navigation_content" >
                      <div className="_main" >現正熱播</div>
                  </div>
              </button>
          </li>
          <li className="navigation_item"  >
            <button onClick={() => {toggleOpen(2); handleLinkClick("準備下檔電影")}} className={`navigation_link ${selectedLink === "準備下檔電影" ? "link-exact-active" : "" }`}  >
              <div className="navigation_index" >2</div>
              <div className="navigation_content" >
                <div className="_main" >準備下檔電影</div>
              </div>
            </button>
          </li>
          <li className="navigation_item" >
            <button onClick={() => {toggleOpen(3); handleLinkClick("下個月上映電影")}} className={`navigation_link ${selectedLink === "下個月上映電影" ? "link-exact-active" : "" }`} >
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
