import express from "express";

import {
  createTweet,
  deleteTweet,
  getTweets,
  getUsersTweets,
  updateTweet,
} from "../controllers/tweetController.js";

const router = express.Router();
router.get("/tweets/:authorID", getUsersTweets);
router.post("/tweets/createTweet", createTweet);
router.get("/tweets", getTweets);
router.put("/tweets/:authorID", updateTweet);
router.delete("/tweets/:id", deleteTweet);

export default router;
