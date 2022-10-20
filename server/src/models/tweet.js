import mongoose  from "mongoose";
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
    authorUsername: {
      type: String,
      required: true,
    },
    authorID: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
    },
    textContent: {
      type: String,
      required: true,
    },
    imageContent: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Array,
      default: [],
    },
    retweets: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Tweet", tweetSchema);
