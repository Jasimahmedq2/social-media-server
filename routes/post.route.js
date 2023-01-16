const express = require('express');
const { createPostController, updatePostController, deletePostController, LikeAndDislikeController, getAPostController, findTimelineController } = require('../controller/newPost.controller');
const Router = express.Router();

Router.post('/', createPostController)
Router.put('/:id/like', LikeAndDislikeController)
Router.get('/:id/timeline', findTimelineController)
Router.route('/:id')
.get(getAPostController)
.put(updatePostController)
.delete(deletePostController)

module.exports = Router;