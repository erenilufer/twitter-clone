const Tweet = require("../models/tweet.js");

const createTweet = async (req, res) => {
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
const updateTweet = async (req, res) => {
  if (req.params.id === req.body.id) {
    const tweet = await Tweet.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    try {
      res.status(200).json(tweet);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

const getTweets = async (req, res) => {
  const tweets = await Tweet.find();
  try {
    res.status(200).json(tweets);
  } catch (err) {
    res.status(500).json(err);
  }
};
const deleteTweet = async (req, res) => {
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
const getUsersTweets = async (req, res) => {
  const tweets = await Tweet.find({ authorName: req.params.authorName });
  try {
    if (!tweets) {
      return res.status(404).json({ code: 404, message: "No tweets found" });
    }
    res.status(200).json(tweets);
  } catch (err) {
    res.status(500).json({ code: 500, message: "Server did not respond" });
  }
};
module.exports = {
  getTweets,
  createTweet,
  deleteTweet,
  updateTweet,
  getUsersTweets,
};
