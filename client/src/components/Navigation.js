import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
  const handleChange = () => {
    
  }
  return (
    <div class="navigation navigation-start" >
      <ul class="navigation_list" >
          <li class="navigation_item"  >
              <Link href="/gallery/section1/" class="navigation_link link-exact-active link-active" >
                  <div class="navigation_index" >1</div>
                  <div class="navigation_content" >
                      <div class="_main" >現正熱播</div>
                  </div>
              </Link>
          </li>
          <li class="navigation_item"  >
            <Link aria-current="page" class="navigation_link"  >
              <div class="navigation_index" >2</div>
              <div class="navigation_content" >
                <div class="_main" >準備下檔電影</div>
              </div>
            </Link>
          </li>
          <li class="navigation_item" >
            <Link class="navigation_link" >
              <div class="navigation_index" >3</div>
              <div class="navigation_content"  >
                <div class="_main"  >下個月上映電影</div>
              </div>
            </Link>
          </li>
      </ul>
    </div>
  )
}

export default Navigation;