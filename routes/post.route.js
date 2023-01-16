const express = require('express');
const { createPostController, updatePostController, deletePostController, LikeAndDislikeController } = require('../controller/newPost.controller');
const Router = express.Router();

Router.post('/', createPostController)
Router.put('/:id/like', LikeAndDislikeController)
Router.route('/:id')
.put(updatePostController)
.delete(deletePostController)

module.exports = Router;