const router = require("express").Router();
const Content = require("../models").content;

router.use("/", (req, res, next) => {
  console.log("éè£¡æ¯ä½ çæç« é é¢...");
  next();
});

router.get("/test", (req, res) => {
  return res.send("...");
});

// ç¼æ
router.post("/", async (req, res) => {
  if (req.user.isFree()) {
    return res.status(400).send("åªæå å¥æå¡æå¯ä»¥ç¼æå·~");
  }
  // èº«åç¢ºèªå¾å²å­
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
      message: "æ°æç« å·²ç¶ä¿å­",
      savedContent
    });
  } catch(e) {
    return res.status(500).send("ç¡æ³æ°å¢å§å®¹");
  };
});

// æ¹æ
router.patch("/:_id", async (req, res) => {
  if (req.user.isFree()) {
    return res.status(400).send("åªæå å¥æå¡æå¯ä»¥ç¼æå·~");
  }
  // èº«åç¢ºèªå¾ç¢ºèªæç« å­å¨ï¼åå²å­æ°è³æ
  let { _id } = req.params;
  try {
    let contentFound = await Content.findOne({ _id }).exec();
    if (!contentFound) {
      return res.status(400).send("æ¾ä¸å°æç« ãç¡æ³ä¿®æ¹æç« ã");
    }

    if (contentFound.writer.equals(req.user._id)) {
      let updatedContent = await Content.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "èª²ç¨æ´æ°æå~",
        updatedContent
      });
    } else {
      return res.status(403).send("åªææ­¤æç« çç¨æ¶æè½åªé¤èª²ç¨ã");
    }
  } catch(e) {
    return res.status(500).send("ç¡æ³ä¿®æ¹å§å®¹");
  };
});

// åªæ
router.delete("/:_id", async(req, res) => {
  if (req.user.isFree()) {
    return res.status(400).send("åªæå å¥æå¡æå¯ä»¥ç¼æå·~");
  }
  let { _id } = req.params;
  // ç¢ºèªæç« å­å¨
  try {
    let contentFound = await Content.findOne({ _id }).exec();
    if (!contentFound) {
      return res.status(400).send("æ¾ä¸å°èª²ç¨ãç¡æ³åªé¤èª²ç¨ã");
    }

    // ä½¿ç¨èå¿é æ¯æ­¤èª²ç¨è¬å¸«ï¼æè½åªé¤èª²ç¨
    if (contentFound.writer.equals(req.user._id)) {
      await Content.deleteOne({ _id }).exec();
      return res.send("èª²ç¨åªé¤æå~");
    } else {
      return res.status(403).send("åªææ­¤èª²ç¨çè¬å¸«æè½åªé¤èª²ç¨ã");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

// ç²å¾ç³»çµ±ä¸­çææç¼æ
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

// ç¨ä½èIdæ¾ç¼æ
router.get("/writer/:_writer_id", async (req, res) => {
  let { _writer_id } = req.params;
  let contentFound = await Content.find({ writer: _writer_id })
    .populate("writer", ["username", "email"])
    .exec();
  return res.send(contentFound);
});

// ç¨æ¨é¡å°æ¾æç« 
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

// ç¨TMDBIdå°æ¾æç« 
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

// ç¨æç« IDå°æ¾æç« 
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