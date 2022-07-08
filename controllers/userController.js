const User = require("../models/User");

const userController = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) => {
            if(user) {
                res.json(user);
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    addUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            req.body
        )
        .then((user) => {
            if(user) {
                res.json(user);
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    removeUser(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId }
        )
        .then((user) => {
            if(user) {
                res.json(user);
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId }}
        )
        .then((user) => {
            if(user) {
                res.json(user);
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId }}
        )
        .then((user) => {
            if(user) {
                res.json(user);
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    }
}

module.exports = userController;