const express = require('express');
const { userController, updateUserController, deleteUserController, getAllUserData, getUserProfileData } = require('../controller/manageUser.controller');
const { suggestedUserController, getMutualFriendController } = require('../controller/suggested.controller');
const { userFollowingController, userUnFollowingController } = require('../controller/userFollowing.controller');
const  Router = express.Router()

Router.get('/all', getAllUserData)
Router.get('/userProfile', getUserProfileData)
Router.get('/mutualfriends/:id1/:id2', getMutualFriendController)

Router.put('/:id/following', userFollowingController)
Router.put('/:id/unfollowed', userUnFollowingController)

Router.get('/currentUser/:id', suggestedUserController)

Router.route('/:id')
.get(userController)
.put(updateUserController)
.delete(deleteUserController)

module.exports = Router;