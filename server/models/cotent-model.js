const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentSchema = new Schema ({
  id: {
    type: String,
  },
  title: {
    type: String,
    trquired: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  commenters: {
    type: [String],
    default: [],
  },
  tags: {
    type: [String],
    default: [],
  },
  TMDBId: {
    type: String,
  },
  TMDBImg: {
    type: String,
  } 
});

module.exports = mongoose.model("Content", contentSchema);