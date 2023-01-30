const postModel = require("../Model/post.model")
const userModel = require("../Model/user.model")

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
  console.log("req.body",req.query.userId)
  try {
    const post = await postModel.findById(req.params.id)
    console.log(post)
    if (post.userId === req.query.userId) {
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

exports.LikeAndDislikeController = async (req, res) => {
  const post = await postModel.findById(req.params.id)
  console.log(post)
  try {
    if (!post.like.includes(req.body.userId)) {
      await post.updateOne({ $push: { like: req.body.userId } })
      res.status(200).send('liked the post')
    } else {
      await post.updateOne({ $pull: { like: req.body.userId } })
      res.status(200).send('disliked the post')
    }
  } catch (error) {
    console.log("here was an error", error)
    res.status(500).send(error)
  }
}

// get a post

exports.getAPostController = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id)
    res.status(200).send(post)
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.findTimelineController = async (req, res) => {
console.log("userid", req.body.userId)
  try {
    const post = await userModel.findById(req.query.userId)
    console.log(post)
    const { followers} = post;

    const userData = await postModel.find({userId: req.query.userId})
   

    postModel.find({ userId: { $in: followers } }, (err, docs) => {
      if (err) {
        console.log("error", error)
      } else {
        const timelineData = [...docs, ...userData]
        res.status(200).send(timelineData)
      }
    });

  } catch (error) {
    res.status(500).send(error)
  }

}

