import Tweet from "../models/tweet.js";

export const createTweet = async (req, res) => {
  try {
    const tweet = Tweet({
      authorName: req.body.authorName,
      authorUsername: req.body.authorUsername,
      authorID: req.body.authorID,
      authorImage: req.body.authorImage,
      textContent: req.body.textContent,
    });
    const newTweet = await tweet.save();
    res.status(200).json(newTweet);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const updateTweet = async (req, res) => {
  console.log(req.body);
  try {
    await Tweet.updateMany(
      { authorID: req.params.authorID },
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log("tweet");

    return res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json(err);
  }
  res.status(404).send({ message: "Error", code: 404 });
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
export const getUsersTweets = async (req, res) => {
  console.log(req.params.authorUsername);
  const tweets = await Tweet.find({
    authorID: req.params.authorID,
  });
  try {
    if (!tweets) {
      return res.status(404).json({ code: 404, message: "No tweets found" });
    }
    res.status(200).json(tweets);
  } catch (err) {
    res.status(500).json({ code: 500, message: "Server did not respond" });
  }
};
