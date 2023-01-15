const express = require('express');
const { createPostController } = require('../controller/newPost.controller');
const Router = express.Router();

Router.post('/', createPostController)

module.exports = Router;