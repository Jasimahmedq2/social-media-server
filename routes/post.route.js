const express = require('express');
const { countLikeController } = require('../controller/allLikesCount.controller');
const { createPostController, updatePostController, deletePostController, LikeAndDislikeController, getAPostController, findTimelineController } = require('../controller/newPost.controller');
const Router = express.Router();

Router.post('/', createPostController)
Router.get('/allLikes', countLikeController)
Router.put('/:id/like', LikeAndDislikeController)
Router.get('/timeline', findTimelineController)
Router.route('/:id')
.get(getAPostController)
.put(updatePostController)
.delete(deletePostController)

module.exports = Router;