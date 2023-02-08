const express = require('express');
const { commentPostController, getCommentController } = require('../controller/comment.controller');
const Router = express.Router();

Router.post('/', commentPostController)
Router.get('/:id', getCommentController)

module.exports = Router;