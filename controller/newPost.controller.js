const postModel = require("../Model/post.model")

exports.createPostController = async (req, res) => {
  try {
    const newPost = new postModel(req.body)
    const result = await newPost.save()
    res.status(200).send('successfully create a post')
  } catch (error) {
    res.status(500).send(error)
  }
}
exports.updatePostController = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).send('successfully update the post',)
    } else {
      res.status(403).send("you can't update another user post")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.deletePostController = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.delete()
      res.status(200).send('successfully deleted the post',)
    } else {
      res.status(403).send("you can't delete another user post")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

// like and dislike the post

exports.LikeAndDislikeController = async(req, res) =>{
  const post = await postModel.findById(req.params.id)
  try {
    if(!post.like.includes(req.body.userId)){
      await post.updateOne({$push:{like: req.body.userId}})
      res.status(200).send('liked the post')
    } else{
      await post.updateOne({$pull:{like: req.body.userId}})
      res.status(200).send('disliked the post')
    }
  } catch (error) {
    console.log("here was an error", error)
    res.status(500).send(error)
  }
}

