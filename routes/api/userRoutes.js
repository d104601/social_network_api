const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    addUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require("../../controllers/userController");

// api/users
router.route("/").get(getUsers).post(addUser);

// api/users/:id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(removeUser);

// api/users/:id/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
