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