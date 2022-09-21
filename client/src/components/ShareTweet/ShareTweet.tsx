import React, { useState } from "react";
import { createTweet } from "../../api/tweet";
import stockImage from "../../assets/stock2.jpeg";

type Props = {
  setIsModalVisible?: any;
};

const ShareTweet = (props: Props) => {
  const { setIsModalVisible } = props;
  const [textContent, setTextContent] = useState("");

  const tweetHandler = () => {
    textContent !== ""
      ? createTweet({ authorName: "erenilufer", textContent }).then(() => {
          setTextContent("");
          setIsModalVisible(false);
        })
      : alert("Enter a tweet message");
  };
  return (
    <form className="flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="img inline-block overflow-hidden w-10 h-10 rounded-full">
          <img className="w-full h-auto" src={stockImage} alt="" />
        </div>
        <input
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          className="focus:outline-none text-white font-bold flex-1 p-1 bg-transparent"
          type="text"
          placeholder="What's happening?"
        />
      </div>
      <button
        type="submit"
        onClick={tweetHandler}
        className="self-end bg-[#1d9bf0] hover:bg-[#1a8cd8 text-white px-3 py-2 rounded-full font-bold text-sm "
      >
        Tweet
      </button>
    </form>
  );
};

export default ShareTweet;
