const Thought = require("../models/Thought");

const thoughtController = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) => {
            if(thought) {
                res.json(thought);
            }
            else {
                res.status(404).json({ message: "No thought with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    addThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
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