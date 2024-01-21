const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    required: true,
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    required: true,
    type: String,
    minlength: 6,
    maxlength: 50,
  },
  password: {
    required: true,
    type: String,
    minlength: 8,
    maxlength: 50,
  },
  role: {
    required: true,
    type: String,
    enum: ["free", "standard", "premium"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  slide: {
    type: [String],
    default: [],
  },
  slideImg: {
    type: [String],
    default: [],
  },
  contentId: {
    type: [String],
    default: [],
  },
  cast: {
    cast1: {type: String, default: "1257220"},
    cast2: {type: String, default: "100765"},
    cast3: {type: String, default: "585211"},
    cast4: {type: String, default: "100766"},
  },
  favoritePerson: {
    type: String,
    default: "87661",
  }

})


// 
userSchema.methods.isFree = function () {
  return this.role == "free";
};

userSchema.methods.isStandard = function () {
  return this.role == "standard";
};

userSchema.methods.isPremium = function () {
  return this.role == "premium";
};

userSchema.methods.comparePassword = async function (password, cb) {
  let result;
  try {
    result = await bcrypt.compare(password, this.password);
    return cb(null, result);
  } catch (e) {
    return cb(e, result);
  }
};

// mongoose middlewares
// 若使用者為新用戶，或者是正在更改密碼，則將密碼進行雜湊處理
userSchema.pre("save", async function (next) {
  // this 代表 mongoDB 內的 document
  if (this.isNew || this.isModified("password")) {
    const hashValue = await bcrypt.hash(this.password, 10);
    this.password = hashValue;
  }
  next();
});



module.exports = mongoose.model("User", userSchema);