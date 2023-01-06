const express = require("express");
const router = express.Router();

const Score = require("../models/Score");

// GET ALL SCORES
router.get("/scores", (req, res) => {
  Score.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// CREATE NEW SCORE
router.post("/scores", (req, res) => {
  const score = new Score({
    username: req.body.username,
    score: req.body.score,
    type: req.body.type,
  });

  score
    .save() // returns Promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// UPDATE A SCORE
router.patch("/score/:scoreId", (req, res) => {
  Score
    .updateOne(
      { _id: req.params.scoreId },
      { $set: { score: req.body.score } }
    ) // returns Promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
