const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  profilePicture: {
    type: String,
    default: ""
  },
  coverPicture: {
    type: String,
    default: ""
  },
  followers: {
    type: Array,
    default: []
  },
  followings: {
    type: Array,
    default: []
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    max: 100
  },
  city: {
    type: String,
    default: "",
    max: 50
  },
  from: {
    type: String,
    default:"",
    max: 50
  },
  relationship: {
    type: Number,
    enum: [1, 2, 3]
  }
},
  { timestamps: true }
)

const userModel = mongoose.model('usermodel', userSchema)
module.exports = userModel;