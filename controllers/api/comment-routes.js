const router = require("express").Router();
const { Comment } = require("../../models");

// Get all comments at api/comments (comment_text, user_id, post_id)
router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post a new comment at api/comments
router.post("/", (req, res) => {
  // Check the session means if logged in
  if (req.session) {
    // Expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // Use id from the session
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// Delete comment at api/comments/:id
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;