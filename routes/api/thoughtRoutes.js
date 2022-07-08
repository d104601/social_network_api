const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require("../../controllers/thoughtController").default;

// api/thoughts
router.route("/").get(getThoughts).post(addThought);

// api/thoughts/thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(removeThought);

// api/thoughts/thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;