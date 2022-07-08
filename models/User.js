const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: String,
        email: String,
        thoughts: [],
        friends: []
    }
);

const User = model('user', userSchema);

module.exports = User;