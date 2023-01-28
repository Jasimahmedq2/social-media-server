const express = require('express');
const { userController, updateUserController, deleteUserController, getAllUserData, getUserProfileData } = require('../controller/manageUser.controller');
const { userFollowingController, userUnFollowingController } = require('../controller/userFollowing.controller');
const  Router = express.Router()

Router.get('/all', getAllUserData)
Router.get('/userProfile', getUserProfileData)

Router.put('/:id/following', userFollowingController)
Router.put('/:id/unfollowed', userUnFollowingController)


Router.route('/:id')
.get(userController)
.put(updateUserController)
.delete(deleteUserController)

module.exports = Router;