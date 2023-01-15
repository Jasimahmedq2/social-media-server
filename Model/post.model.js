const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },

  description: {
    type: String,
    max: 500
  },

  like: {
    type: Array,
    default: []
  },
  
  img: {
    type: String,
    default: ""
  }
},
  { timestamps: true }
)

const postModel = mongoose.model('postmodel', postSchema)
module.exports = postModel;