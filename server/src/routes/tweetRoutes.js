import express from "express";
import {
  createTweet,
  deleteTweet,
  getTweets,
} from "../controllers/tweetController.js";

const router = express.Router();

router.post("/tweets/createTweet", createTweet);
router.get("/tweets", getTweets);
router.delete("/tweets/:id", deleteTweet);
export default router;
