const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usermodel',
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'postmodel',
    required: true
  }
}, {
  timestamps: true
})

const commentModel = mongoose.model('commentModel', CommentSchema)

module.exports = commentModel