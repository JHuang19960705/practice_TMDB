const router = require("express").Router();
const Content = require("../models").content;

router.use("/", (req, res, next) => {
  console.log("這裡是你的文章頁面...");
  next();
});

router.get("/test", (req, res) => {
  return res.send("...");
});

// 發文
router.post("/", async (req, res) => {
  if (req.user.isFree()) {
    return res.status(400).send("只有加入會員才可以發文唷~");
  }
  // 身分確認後儲存
  let { title, content, tags, TMDBId, TMDBImg } = req.body;
  try {
    let newContent = new Content({
      title, 
      content,
      tags,
      TMDBId,
      TMDBImg,
      writer: req.user._id, 
    });
    let savedContent = await newContent.save();
    return res.send({
      message: "新文章已經保存",
      savedContent
    });
  } catch(e) {
    return res.status(500).send("無法新增內容");
  };
});

// 改文
router.patch("/:_id", async (req, res) => {
  if (req.user.isFree()) {
    return res.status(400).send("只有加入會員才可以發文唷~");
  }
  // 身分確認後確認文章存在，再儲存新資料
  let { _id } = req.params;
  try {
    let contentFound = await Content.findOne({ _id }).exec();
    if (!contentFound) {
      return res.status(400).send("找不到文章。無法修改文章。");
    }

    if (contentFound.writer.equals(req.user._id)) {
      let updatedContent = await Content.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "課程更新成功~",
        updatedContent
      });
    } else {
      return res.status(403).send("只有此文章的用戶才能刪除課程。");
    }
  } catch(e) {
    return res.status(500).send("無法修改內容");
  };
});

// 刪文
router.delete("/:_id", async(req, res) => {
  if (req.user.isFree()) {
    return res.status(400).send("只有加入會員才可以發文唷~");
  }
  let { _id } = req.params;
  // 確認文章存在
  try {
    let contentFound = await Content.findOne({ _id }).exec();
    if (!contentFound) {
      return res.status(400).send("找不到課程。無法刪除課程。");
    }

    // 使用者必須是此課程講師，才能刪除課程
    if (contentFound.writer.equals(req.user._id)) {
      await Content.deleteOne({ _id }).exec();
      return res.send("課程刪除成功~");
    } else {
      return res.status(403).send("只有此課程的講師才能刪除課程。");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

// 獲得系統中的所有發文
router.get("/", async (req, res) => {
  try{
    let contentFound = await Content.find({})
      .populate(
        "writer", 
        ["username", "email"]
        )
      .exec();
    return res.send(contentFound);
  } catch(e){
    return res.status(500).send(e);
  }
});

// 用作者Id找發文
router.get("/writer/:_writer_id", async (req, res) => {
  let { _writer_id } = req.params;
  let contentFound = await Content.find({ writer: _writer_id })
    .populate("writer", ["username", "email"])
    .exec();
  return res.send(contentFound);
});

// 用標題尋找文章
router.get("/findByContentTitle/:title", async (req, res) => {
  let { name } = req.params;
  try {
    let contentFound = await Content.find({ title: name })
      .populate("writer", ["email", "username"])
      .exec();
    return res.send(contentFound);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// 用TMDBId尋找文章
router.get("/findByTMDBId/:TMDBId", async (req, res) => {
  let { TMDBId } = req.params;
  try {
    let TMDBIdFound = await Content.find({ TMDBId: TMDBId })
      .populate("writer", ["email", "username", "role"])
      .exec();
    return res.send(TMDBIdFound);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// 用文章ID尋找文章
router.get("/findByContentId/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let contentFound = await Content.find({ _id: _id })
      .populate("writer", ["email", "username", "role"])
      .exec();
    return res.send(contentFound);
  } catch (e) {
    return res.status(500).send(e);
  }
});




module.exports = router;