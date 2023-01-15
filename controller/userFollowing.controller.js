const userModel = require("../Model/user.model")

exports.userFollowingController = async (req, res) => {
   if(req.body.userId !== req.params.id){
    try {
      const user = await userModel.findById(req.params.id)
      const currentUser = await userModel.findById(req.body.userId)
      if(!user.followers.includes(req.body.userId)){
        const updateUser = await user.updateOne({$push:{followers: req.body.userId}})
        const updateCurrent = await currentUser.updateOne({$push:{followings: req.params.id}})
        res.status(200).send('you are now connected ')
      } else{
        res.status(403).send('your are already connected this user')
      }
    } catch (error) {
      res.status(500).send(error)
    }
   } else{
    res.status(403).send("you can't follow your self")
   }
}

exports.userUnFollowingController = async (req, res) => {
  if(req.body.userId !== req.params.id){
   try {
     const user = await userModel.findById(req.params.id)
     const currentUser = await userModel.findById(req.body.userId)
     if(user.followers.includes(req.body.userId)){
       const updateUser = await user.updateOne({$pull:{followers: req.body.userId}})
       const updateCurrent = await currentUser.updateOne({$pull:{followings: req.params.id}})
       res.status(200).send('un followed user')
     } else{
       res.status(403).send('you are not connected this user')
     }
   } catch (error) {
     res.status(500).send(error)
   }
  } else{
   res.status(403).send("you can't unFollow this user")
  }
}