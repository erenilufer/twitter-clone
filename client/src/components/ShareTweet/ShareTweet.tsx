import { useState } from "react";
import { createTweet } from "../../api/tweet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Toast from "../../helpers/Toast";

type Props = {
  setIsModalVisible?: any;
};

const ShareTweet = (props: Props) => {
  const { setIsModalVisible } = props;
  const user = useSelector((state: RootState) => state.auth.user);

  const [textContent, setTextContent] = useState("");
  const buttonDisabled =
    "self-end bg-blue  opacity-60 text-white px-3 py-2 rounded-full font-bold text-sm ";
  const buttonActive =
    "self-end bg-blue hover:bg-blueDarker text-white px-3 py-2 rounded-full font-bold text-sm";
  const tweetHandler = () => {
    createTweet({
      authorName: user?.name,
      authorUsername: user?.username,
      authorID: user?._id,
      authorImage: user?.image,
      textContent,
    })
      .then(() => {
        Toast("Success", "Tweet successfully published!");
        setTextContent("");
        setIsModalVisible(false);
      })
      .catch((err) => {
        err.code && Toast("Error", err.message);
      });
  };
  return (
    <form className="flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <img
          className=" object-cover w-10 h-10 rounded-full"
          src={user?.image}
          alt=""
        />

        <input
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          className="bg-primary focus:outline-none text-white font-bold flex-1 p-1 bg-transparent"
          type="text"
          placeholder="What's happening?"
        />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          tweetHandler();
        }}
        disabled={textContent === ""}
        className={textContent === "" ? buttonDisabled : buttonActive}
      >
        Tweet
      </button>
    </form>
  );
};

export default ShareTweet;
