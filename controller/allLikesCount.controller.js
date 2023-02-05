const postModel = require("../Model/post.model");

exports.countLikeController = async(req, res) => {
  try {
    const posts = await postModel.find({userId: req.body.userId});
    console.log(posts)
    const postWithLikeCount = posts.map(post => ({
      ...post.toObject(),
      likeCount: post.like.length
    }));
    console.log(postWithLikeCount)
    res.json(postWithLikeCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}