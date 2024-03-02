const router = require("express").Router();
const User = require("../models").user;
const Content = require("../models").content;
const jwt = require("jsonwebtoken");



router.use((req, res, next) => {
  console.log("allowing access to a request about auth...");
  next();
})

// ç²å¾ç³»çµ±ä¸­çæææå¡
router.get("/", async (req, res) => {
  try{
    let userFound = await User.find({})
      .exec();
    return res.send(userFound);
  } catch(e){
    return res.status(500).send(e);
  }
});

// è¨»å
router.post("/register", async (req, res) => {
  let { email, username, password, role } = req.body;
  let newUser = new User({ email, username, password, role });

  try{
    let savedUser = await newUser.save();
    return res.send({
      msg: "æ­¡è¿å å¥",
      savedUser,
    })
  } catch(e) {
    res.status(500).send("ç¡æ³å²å­ä½¿ç¨è...");
  }
})

// ä¿®æ¹åå­ãä¿¡ç®±
router.patch("/patchProfile/:_id", async(req, res) => {
  // èº«åç¢ºèªå¾ç¢ºèªæç« å­å¨ï¼åå²å­æ°è³æ
  let { _id } = req.params;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("æ¾ä¸å°åè³ãç¡æ³åªé¤èª²ç¨ã");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let updatedProfile = await User.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "ä½ çè³ææ´æ°æå~",
        token: "JWT " + token,
        user: updatedProfile,
      });
    } else {
      return res.status(403).send("åªæç¨æ¶æ¬äººæè½ä¿®æ¹è³æã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹è³æ");
  };
})

// ä¿®æ¹èº«å
router.patch("/patchRole/:_id", async(req, res) => {
  // èº«åç¢ºèªå¾ç¢ºèªæç« å­å¨ï¼åå²å­æ°è³æ
  // æ°èº«åä¸è½è·èèº«åä¸è´
  let { _id } = req.params;
  let { role } = req.body;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("æ¾ä¸å°åè³ãç¡æ³åªé¤èª²ç¨ã");
    }
    let roleFound = await User.findOne({ role }).exec();
    if ( profileFound.equals(roleFound) ) {
      return res.status(400).send("èåæ¬èº«åä¸è´ï¼ç¡æ³æ´æ¹");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let updatedProfile = await User.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "ä½ çèº«åæ´æ°æå~",
        token: "JWT " + token,
        user: updatedProfile,
      });
    } else {
      return res.status(403).send("åªæç¨æ¶æ¬äººæè½ä¿®æ¹è³æã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹è³æ");
  };
})

// ç»å¥
router.post("/login", async (req, res) => {
  const foundUser = await User.findOne( { email: req.body.email } );
  if ( !foundUser ){
    return res.status(401).send("éåä¿¡ç®±æ²è¨»åéå...");
  } 

  foundUser.comparePassword(req.body.password, (err, isMatch) => {
    if(err) return res.status(500).send(err);

    if (isMatch) {
      // è£½ä½json web token
      const tokenObject = { _id: foundUser._id, email: foundUser.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      console.log(foundUser);
      return res.send({
        message: "æåç»å¥",
        token: "JWT " + token,
        user: foundUser,
      });
    }else {
      return res.status(401).send("å¯ç¢¼é¯èª¤");
    }
  });
})

// åªé¤
router.delete("/:username", async(req, res) => {
  let { username } = req.params;
  // ç¢ºèªç¨æ¶å­å¨
  try {
    let userFound = await User.findOne({ username }).exec();
    if (!userFound) {
      return res.status(400).send("æ¾ä¸å°éä½Userãç¡æ³åªé¤èª²ç¨ã");
    } else {
      // ä½¿ç¨èå¿é æ¯æ­¤èª²ç¨è¬å¸«ï¼æè½åª
      await User.deleteOne({ username }).exec();
      return res.send("ç¨æ¶åªé¤æå~");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
})


//æ¾å¥å¹»çç
router.patch("/patchSlide/:_id", async(req, res) => {
  let { _id } = req.params;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("æ¾ä¸å°åè³ãç¡æ³æ¾å¥å¹»ççã");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let patchSlide = await User.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "ä½ çè³ææ´æ°æå~",
        token: "JWT " + token,
        user: patchSlide,
      });
    } else {
      return res.status(403).send("åªæç¨æ¶æ¬äººæè½æ¾å¥å¹»ççã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹è³æ");
  };
})

//æ¾å¥æç« Id
router.patch("/patchReviews/:_id", async(req, res) => {
  let { _id } = req.params;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("æ¾ä¸å°åè³ãç¡æ³æ¾å¥å¹»ççã");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let patchReviews = await User.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "ä½ çè³ææ´æ°æå~",
        token: "JWT " + token,
        user: patchReviews,
      });
    } else {
      return res.status(403).send("åªæç¨æ¶æ¬äººæè½æ¾å¥å¹»ççã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹è³æ");
  };
})

//ä¿®æ¹äººç©
router.patch("/patchCast/:_id", async(req, res) => {
  let { _id } = req.params;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("æ¾ä¸å°åè³ãç¡æ³æ¾å¥å¹»ççã");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let patchCast = await User.findOneAndUpdate(
        { _id }, 
        req.body, 
        { new: true, runValidators: true },
      );
      return res.send({
        message: "ä½ çè³ææ´æ°æå~",
        token: "JWT " + token,
        user: patchCast,
      });
    } else {
      return res.status(403).send("åªæç¨æ¶æ¬äººæè½æ¾å¥å¹»ççã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹è³æ");
  };
})

//ä¿®æ¹äººç©ä¸»é¡
router.patch("/patchFavoritePerson/:_id", async(req, res) => {
  let { _id } = req.params;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("æ¾ä¸å°åè³ãç¡æ³æ¾å¥å¹»ççã");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let patchFavoritePerson = await User.findOneAndUpdate(
        { _id }, 
        req.body, 
        { new: true, runValidators: true },
      );
      return res.send({
        message: "ä½ çè³ææ´æ°æå~",
        token: "JWT " + token,
        user: patchFavoritePerson,
      });
    } else {
      return res.status(403).send("åªæç¨æ¶æ¬äººæè½æ¾å¥å¹»ççã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹è³æ");
  };  
})

//ä¿®æ¹ä¸»é¡
router.patch("/patchTheme/:_id", async(req, res) => {
  let { _id } = req.params;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("æ¾ä¸å°åè³ãç¡æ³æ¾å¥å¹»ççã");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let patchTheme = await User.findOneAndUpdate(
        { _id }, 
        req.body, 
        { new: true, runValidators: true },
      );
      return res.send({
        message: "ä½ çè³ææ´æ°æå~",
        token: "JWT " + token,
        user: patchTheme,
      });
    } else {
      return res.status(403).send("åªæç¨æ¶æ¬äººæè½æ¾å¥å¹»ççã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹è³æ");
  };  
})

//æ¾å¥é»å½±é¢
router.patch("/patchTheater/:_id", async(req, res) => {
  let { _id } = req.params;
  try {
    let profileFound = await User.findOne({ _id }).exec();
    if (!profileFound) {
      return res.status(400).send("æ¾ä¸å°åè³ãç¡æ³æ¾å¥å¹»ççã");
    }

    if (profileFound.equals(_id)) {
      const tokenObject = { _id: profileFound._id, email: profileFound.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      let patchTheater = await User.findOneAndUpdate(
        { _id }, 
        req.body, 
        { new: true, runValidators: true },
      );
      return res.send({
        message: "ä¿å­æå",
        token: "JWT " + token,
        user: patchTheater,
      });
    } else {
      return res.status(403).send("åªæç¨æ¶æ¬äººæè½æ¾å¥å¹»ççã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹è³æ");
  };  
})

module.exports = router;