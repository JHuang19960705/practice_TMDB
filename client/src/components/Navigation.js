import React from 'react'

function Navigation() {
  return (
    <div class="navigation navigation-start" >
      <ul class="navigation_list" >
          <li class="navigation_item"  >
              <a href="/gallery/section1/" class="navigation_link" >
                  <div class="navigation_index" >1</div>
                  <div class="navigation_content" >
                      <div class="_main" >現正熱播</div>
                  </div>
              </a></li>
          <li class="navigation_item"  ><a href="/gallery/section2/"
                  aria-current="page"
                  class="navigation_link link-exact-active link-active"  >
                  <div class="navigation_index" >2</div>
                  <div class="navigation_content" >
                      <div class="_main" >喜劇片</div>
                  </div>
              </a></li>
          <li class="navigation_item" ><a href="/gallery/section3/"
                  class="navigation_link" >
                  <div class="navigation_index" >3</div>
                  <div class="navigation_content"  >
                      <div class="_main"  >推理片</div>
                  </div>
              </a></li>
          <li class="navigation_item"  ><a href="/gallery/section4/"
                  class="navigation_link"  >
                  <div class="navigation_index"  >4</div>
                  <div class="navigation_content"  >
                      <div class="_main"  >科幻片</div>
                  </div>
              </a></li>
          <li class="navigation_item"  ><a href="/gallery/section5/"
                  class="navigation_link"  >
                  <div class="navigation_index"  >5</div>
                  <div class="navigation_content"  >
                      <div class="_main"  >紀錄片</div>
                  </div>
              </a></li>
          <li class="navigation_item"  ><a href="/gallery/section6/"
                  class="navigation_link"  >
                  <div class="navigation_index"  >6</div>
                  <div class="navigation_content"  >
                      <div class="_main"  >恐怖片</div>
                  </div>
              </a></li>
          <li class="navigation_item"  ><a href="/gallery/section7/"
                  class="navigation_link"  >
                  <div class="navigation_index"  >7</div>
                  <div class="navigation_content"  >
                      <div class="_main"  >愛情片</div>
                  </div>
              </a></li>
          <li class="navigation_item"  ><a href="/gallery/section8/"
                  class="navigation_link"  >
                  <div class="navigation_index"  >8</div>
                  <div class="navigation_content"  >
                      <div class="_main"  >兒童片</div>
                  </div>
              </a></li>
      </ul>
    </div>
  )
}

export default Navigation;