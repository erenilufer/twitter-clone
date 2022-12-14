import { XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ShareTweet from "../ShareTweet/ShareTweet";

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: any;
}

const TweetModal = (props: Props) => {
  const { isModalVisible, setIsModalVisible } = props;
  useEffect(() => {
    isModalVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isModalVisible]);

  const closeHandler = () => {
    setIsModalVisible(false);
  };
  if (!isModalVisible) return <></>;

  return createPortal(
    <div
      onClick={closeHandler}
      className="fixed z-10 w-full h-full bg-opacity-20 backdrop-blur-lg flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-lg -mt-10 mx-5 w-full  bg-[#15202B] flex flex-col border border-grey rounded-2xl p-5 "
      >
        <div className="text-white flex justify-between items-center mb-5 ">
          <h1 className="text-lg font-extrabold">Share a Tweet</h1>
          <XCircleIcon
            onClick={() => setIsModalVisible(false)}
            className="w-8 h-8 cursor-pointer  text-greyLighter hover:text-white duration-200"
          />
        </div>
        <div className="flex flex-col ">
          <ShareTweet setIsModalVisible={setIsModalVisible} />
        </div>
      </div>
    </div>,
    document.getElementById("layout")!
  );
};

export default TweetModal;
