import { useState } from "react";
import { createTweet } from "../../api/tweet";
import stockImage from "../../assets/stock2.jpeg";
import ShareTweet from "../ShareTweet/ShareTweet";

interface Props {}

const FeedHeader = (props: Props) => {
  return (
    <div className="flex flex-col p-2 py-4 border-b border-b-grey">
      <h1 className="text-white text-lg font-extrabold mb-2">Home</h1>
      <ShareTweet />
    </div>
  );
};

export default FeedHeader;
