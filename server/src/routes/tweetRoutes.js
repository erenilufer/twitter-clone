const express = require("express");
const {
  createTweet,
  deleteTweet,
  getTweets,
  getUsersTweets,
} = require("../controllers/tweetController.js");

const router = express.Router();
router.get("/tweets/:authorName", getUsersTweets);
router.post("/tweets/createTweet", createTweet);
router.get("/tweets", getTweets);
router.delete("/tweets/:id", deleteTweet);
module.exports = router;
