const express = require('express');
const { userController, updateUserController, deleteUserController } = require('../controller/manageUser.controller');
const  Router = express.Router()


Router.route('/')
.get(userController)

//put
Router.route('/:id')
.put(updateUserController)
.delete(deleteUserController)

module.exports = Router;