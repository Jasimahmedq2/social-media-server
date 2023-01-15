const bcrypt = require('bcrypt');
const userModel = require('../Model/user.model');

exports.userController = async(req, res) => {
 try { 
  const findData = await userModel.findById(req.params.id, '-password')
  res.status(200).send(findData)
 } catch (error) {
  res.status(500).send(error)
 }
}
exports.updateUserController = async (req, res) => {
  if (req.params.id === req.body.userId || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash;
      } catch (error) {
         console.log(error)
         res.status(500).send(error)
      }
    }

    try {
      const user = await userModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
      })
      res.status(200).send('successfully updated data')
    } catch (error) {
      res.status(500).send(error)
    }
  }
  else {
    res.status(500).send('data not updated')
  }
}

// delete user 

exports.deleteUserController = async(req, res) => {
  if (req.params.id === req.body.userId || req.body.isAdmin) {

    try {
      const user = await userModel.findByIdAndDelete(req.params.id)
      res.status(200).send('successfully deleted data')
    } catch (error) {
      res.status(500).send(error)
    }
  }
  else {
    res.status(500).send('data not deleted')
  }
}

