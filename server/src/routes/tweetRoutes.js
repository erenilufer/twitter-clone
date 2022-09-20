const express = require("express");
const {
  createTweet,
  deleteTweet,
  getTweets,
} = require("../controllers/tweetController.js");

const router = express.Router();

router.post("/tweets/createTweet", createTweet);
router.get("/tweets", getTweets);
router.delete("/tweets/:id", deleteTweet);
module.exports = router;
