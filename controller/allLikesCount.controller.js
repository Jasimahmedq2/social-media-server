const postModel = require("../Model/post.model");

exports.countLikeController = async(req, res) => {
  console.log(req.query, "userId here")
  try {
    const posts = await postModel.find({userId: req.query.userId});
    console.log(posts)
    const postWithLikeCount = posts.map(post => ({
      ...post.toObject(),
      likeCount: post.like.length
    }));
    res.json(postWithLikeCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}