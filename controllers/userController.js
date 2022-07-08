const User = require("../models/User");

const userController = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({_id: req.params.id })
    },
    addUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {

    },
    removeUser(req, res) {

    },
    addFriend(req, res) {

    },
    removeFriend(req, res) {}
}

module.exports = userController;