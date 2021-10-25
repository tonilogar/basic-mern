const userCtrl = {};

const User = require('../models/userModel');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}
    

userCtrl.createUser = async (req, res) => {
    const { username } = req.body
    const newUser = new User({username})
    await newUser.save()
    res.json('User created')
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('User deleted')
}
userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}
userCtrl.updateUser = async (req, res) => {
    const {username} = req.body
    await User.findByIdAndUpdate(req.params.id, {username})
    res.json('User update')
}

module.exports = userCtrl;