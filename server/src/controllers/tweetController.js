import { Tweet } from "../models/tweet.js";

export const createTweet = async (req, res) => {
  try {
    const tweet = Tweet({
      authorName: req.body.authorName,
      textContent: req.body.textContent,
    });
    const newTweet = await tweet.save();
    res.status(200).json(newTweet);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTweets = async (req, res) => {
  const tweets = await Tweet.find();
  try {
    res.status(200).json(tweets);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const deleteTweet = async (req, res) => {
  try {
    const tweet = await Tweet.findByIdAndDelete(req.params.id);
    if (!tweet) {
      res.status(404).json({ message: "Tweet does not exist" });
    } else {
      Tweet.deleteOne({ _id: req.body.id });
      res.status(200).json({ message: "Successfully deleted", data: tweet });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
