# 使用技術

主要技術

- 前端：Next.js / React.js / CSS / Tailwind CSS / RWD / GSAP動畫製作
- 後端：Node.js / Express.js / RESTful API
- 驗證：JWT / passport.js
- 資料庫：MongoDB
- 設計模式：MVC
- 版本控制：git, GitHub
- 部屬：Vercel

其他技術

- 整合 vercel 實踐自動化部署（CD）
- 串接 TMDB API 拿取第三方電影資料、搜尋功能
- 採用 JSON Web Tokens 進行登入驗證
- 採用 bcrypt 處理使用者密碼

待：單元測試：mocha + chai、websocket：[socket.io](http://socket.io/)

# **網站簡介**

網站Demo：https://practice-tmdb-client.vercel.app/

這是一個以電影為主題的評論網站，影迷加入會員之後，可以搜尋、瀏覽各部電影、影集，撰寫影評，也可以將喜歡的電影、演員、主題、影評放入自己的片單，這個片單會呈現成「一頁式的推薦網頁」，每個影迷都可以任意瀏覽每個影迷的片單推薦網頁。

另一項功能是「電影院」功能，每個人可以選取自己喜歡的電影、影集，打造個人的電影院。將電影分成「熱映中」、「即將上映」、「即將下檔」。若未來電影版權開放，點選影集，即可立即觀看電影。

# 開發特色/功能

### 前台特色

瀏覽各個影迷的影評、片單頁面、電影院

- 影評：瀏覽、回覆、(按讚)
- 片單頁面：瀏覽電影海報（carousel功能 - 循環顯示多個圖片）、觀看該影迷推薦的演員、影評、主題、最愛的演員作品
- 電影院：線上串流影音平台（開發中）

### 後台功能

影院管理系統：

- 片單頁面 CRUD - 電影資料選取、資料修改、資料儲存、前台自動選染個人的電影清單
- 演員頁面 CRUD - 演員資料選取、資料修改、資料儲存、前台自動選染個人的演員清單
- 主題頁面 CRUD - 電影主題選取、資料主題、主題儲存、前台自動選染個人的主題清單

影迷會員系統：

- 會員 CRUD - 會員註冊、會員試用、會員資料修改、(會員刪除)、(搜尋會員)

影評文章系統：

- 影評 CRUD - 影評撰寫、影評修改、影評儲存、影評刪除、(搜尋影評)
