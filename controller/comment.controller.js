const commentModel = require("../Model/Comment.mode")

exports.commentPostController = async (req, res) => {
  try {
    const comment = new commentModel({
      text: req.body.text,
      author: req.body.userId,
      post: req.body.postId
    })
    console.log(comment)
    const result = await comment.save()
    res.status(200).send('successfully create a comment')

  } catch (error) {
    console.log("error found", error)
    res.status(500).send("here was an error")
  }
}

exports.getCommentController = async (req, res) => {
  try {
    const result = await commentModel.find({ post: req.params.id }).populate('author')
    res.status(200).send(result)

  } catch (error) {
    console.log(" here was an error", error)
    res.status(500).send(error)
  }
}