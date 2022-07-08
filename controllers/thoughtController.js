const { Thought, User } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        Thought.find({})
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No thought with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    addThought(req, res) {
        Thought.create(req.body)
        .then((data) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: { thoughts: data._id}}
            );
        })
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No user with the id"});
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            req.body
        )
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No thought with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    removeThought(req, res) {
        Thought.findOneAndDelete(
            { _id: req.params.thoughtId }
        )
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No thought with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }}
        )
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No thought with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));        
    },
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId }}}
        )
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No thought or reaction with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));     
    }
};

module.exports = thoughtController;