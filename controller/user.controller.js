const userModel = require("../Model/user.model")
const bcrypt = require('bcrypt');


exports.singUpController = async (req, res) => {
  console.log(req.body)

  try {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);

    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hash
    })
    const user = await newUser.save()
    res.status(200).send(user)

  } catch (error) {
    console.log("here was an error", error.message)
    res.status(500).send(error)
  }
}

exports.loginController = async (req, res) => {
  console.log(req.body)
  try {
    const user = await userModel.findOne({ email: req.body.email })
    
     !user && res.status(404).send('user not found')
    
    if (req.body.password) {
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).send("password not valid")
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}



