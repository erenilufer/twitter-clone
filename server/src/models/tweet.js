import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    authorName: {
      type: String,
      required: true,
    },

    textContent: {
      type: String,
      required: true,
    },
    imageContent: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
