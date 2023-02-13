const userModel = require("../Model/user.model")

exports.suggestedUserController = async (req, res) => {
  const currentUser = await userModel.findOne({ _id: req.params.id })
  console.log("currentUser", currentUser)

  try {
    const suggestedUsers = await userModel.find({
      $and: [
        { _id: { $ne: currentUser._id } },
        {
          $or: [
            { "city": { $in: currentUser.city } },
            { "from": currentUser.from }
          ]
        }
      ]
    })
    res.status(200).send(suggestedUsers)
  } catch (err) {
    console.log(error)
    res.status(500).send('here was an error please try again')
  }


}

// get all mutuals friends

exports.getMutualFriendController = async(req, res) => {

  try {
    const id1 = await userModel.findById(req.params.id1)
    const id2 = await userModel.findById(req.params.id2)
  
    const mutualFriends = id1.followers.filter(mutual1 => 
      id2.followers.some(mutual2 => mutual1 === mutual2)
      )

    const result = await userModel.find({_id: {$in: mutualFriends}})
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send("here was an error")
  }
}