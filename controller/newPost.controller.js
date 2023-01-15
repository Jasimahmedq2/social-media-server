const postModel = require("../Model/post.model")

exports.createPostController = async(req, res) => {
  try {
    const newPost = new postModel(req.body)
    const result = await newPost.save()
    res.status(200).send('successfully create a post')
  } catch (error) {
    res.status(500).send(error)
  }
}