const router = require("express").Router();
const User = require("../models").user;
const jwt = require("jsonwebtoken");



router.use((req, res, next) => {
  console.log("allowing access to a request about auth...");
  next();
})

router.get("/testAPI", (req, res) => {
  return res.send("Connect auth route successfully...");
});

// 註冊
router.post("/register", async (req, res) => {
  let { email, username, password, role } = req.body;
  let newUser = new User({ email, username, password, role });

  try{
    let savedUser = await newUser.save();
    return res.send({
      msg: "歡迎加入",
      savedUser,
    })
  } catch(e) {
    res.status(500).send("無法儲存使用者...");
  }
})

// 修改
router.patch("/patchProfile/:_id", async(req, res) => {
  // 身分確認後確認文章存在，再儲存新資料
  let { _id } = req.params;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("找不到個資。無法刪除課程。");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let updatedProfile = await User.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "你的資料更新成功~",
        token: "JWT " + token,
        user: updatedProfile,
      });
    } else {
      return res.status(403).send("只有用戶本人才能修改資料。");
    }
  } catch(e) {
    return res.status(500).send("無法修改資料");
  };
})

// 登入
router.post("/login", async (req, res) => {
  const foundUser = await User.findOne( { email: req.body.email } );
  if ( !foundUser ){
    return res.status(401).send("這個信箱沒註冊過喔...");
  } 

  foundUser.comparePassword(req.body.password, (err, isMatch) => {
    if(err) return res.status(500).send(err);

    if (isMatch) {
      // 製作json web token
      const tokenObject = { _id: foundUser._id, email: foundUser.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      console.log(foundUser);
      return res.send({
        message: "成功登入",
        token: "JWT " + token,
        user: foundUser,
      });
    }else {
      return res.status(401).send("密碼錯誤");
    }
  });
})

// 刪除
router.delete("/:username", async(req, res) => {
  let { username } = req.params;
  // 確認用戶存在
  try {
    let userFound = await User.findOne({ username }).exec();
    if (!userFound) {
      return res.status(400).send("找不到這位User。無法刪除課程。");
    } else {
      // 使用者必須是此課程講師，才能刪
      await User.deleteOne({ username }).exec();
      return res.send("用戶刪除成功~");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
})


// 獲得系統中的所有會員
router.get("/", async (req, res) => {
  try{
    let userFound = await User.find({})
      .exec();
    return res.send(userFound);
  } catch(e){
    return res.status(500).send(e);
  }
});


module.exports = router;