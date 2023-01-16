const express = require('express');
const { createPostController, updatePostController } = require('../controller/newPost.controller');
const Router = express.Router();

Router.post('/', createPostController)
Router.put('/:id', updatePostController)

module.exports = Router;