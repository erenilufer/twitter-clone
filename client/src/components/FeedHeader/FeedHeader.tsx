import { useState } from "react";
import { createTweet } from "../../api/tweet";
import stockImage from "../../assets/stock2.jpeg";

interface Props {}

const FeedHeader = (props: Props) => {
  const [textContent, setTextContent] = useState("");

  const tweetHandler = () => {
    textContent !== ""
      ? createTweet({ authorName: "erenilufer", textContent }).then(() =>
          setTextContent("")
        )
      : alert("Enter a tweet message");
  };
  return (
    <div className="flex flex-col p-2 py-4 border-b border-b-[#38444d]">
      <h1 className="text-white text-lg font-extrabold mb-2 ">Home</h1>
      <div className="flex items-center gap-2 mb-4">
        <div className="img inline-block overflow-hidden  w-10  h-10 rounded-full">
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
        onClick={tweetHandler}
        className="self-end   bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-3 py-2 rounded-full font-bold text-sm "
      >
        Tweet
      </button>
    </div>
  );
};

export default FeedHeader;
