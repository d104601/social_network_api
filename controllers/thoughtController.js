import { find, findOne, create, findOneAndUpdate, findOneAndDelete } from "../models/Thought";

const thoughtController = {
    getThoughts(req, res) {
        find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        findOne({ _id: req.params.thoughtId })
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
        create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        findOneAndUpdate(
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
        findOneAndDelete(
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
        findOneAndUpdate(
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
        findOneAndUpdate(
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

export default thoughtController;