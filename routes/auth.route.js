const express = require('express');
const { singUpController, loginController } = require('../controller/user.controller');
const Router = express.Router()

Router.post('/signup', singUpController)
Router.post('/login', loginController)
module.exports = Router;