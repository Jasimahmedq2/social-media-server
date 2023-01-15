const express = require('express');
const { userController } = require('../controller/user.controller');
const  Router = express.Router()


Router.route('/')
.get(userController)

module.exports = Router;