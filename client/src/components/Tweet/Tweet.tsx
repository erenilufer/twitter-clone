import { Link } from "react-router-dom";
import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { TweetModel } from "../../models/TweetModel";

interface Props {
  tweet: TweetModel;
}

const Tweet = (props: Props) => {
  const { tweet } = props;
  return (
    <div className="p-4  text-white border-b-[.5px] border-b-grey cursor-pointer hover:bg-greyDarker duration-200">
      <div className="flex gap-4">
        <img
          className="object-cover w-10  h-10 rounded-full"
          src={tweet.authorImage}
          alt="author"
        />
        <div className="flex flex-col gap-1 flex-1 ">
          <Link className="w-fit" to={"/user/" + tweet.authorUsername}>
            <div className="flex items-center gap-1  ">
              <h1 className="font-bold text-xs hover:underline">
                {tweet?.authorName}
              </h1>
              <p className="text-xs text-greyLighter">
                @{tweet.authorUsername}
              </p>
            </div>
          </Link>

          <div>
            <p className="text-xs font-semibold"> {tweet?.textContent}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:px-10   gap-5 mt-3 text-greyLighter">
        <div className="flex items-center gap-1 group hover:bg-skyDarker rounded-xl duration-200 px-2 ">
          <div className="w-7 h-7   flex items-center justify-center    ">
            <ChatBubbleOvalLeftIcon className="w-5 h-5 group-hover:text-sky " />
          </div>
          <span className="text-xs"> {tweet?.comments.length}</span>
        </div>
        <div className="flex items-center gap-1 group rounded-xl duration-200 px-2 hover:bg-tealDarker">
          <div className="w-7 h-7   flex items-center justify-center     ">
            <ArrowPathRoundedSquareIcon className="w-5 h-5 group-hover:text-teal duration-200" />
          </div>
          <span className="text-xs group-hover:text-teal duration-200">
            {tweet?.retweets}
          </span>
        </div>
        <div className="flex items-center gap-1 group rounded-xl duration-200 px-2  ">
          <div className="w-7 h-7 flex items-center justify-center    duration-200">
            <HeartIcon className="w-5 h-5 group-hover:fill-red  group-hover:text-red duration-200" />
          </div>
          <span className="text-xs group-hover:text-red duration-200">
            {tweet?.likes}
          </span>
        </div>

        <div className="flex items-center gap-1 group rounded-full duration-200 px-2 hover:bg-skyDarker  ">
          <div className="w-7 h-7 flex items-center justify-center    duration-200">
            <ArrowUpTrayIcon className="w-5 h-5 group-hover:text-sky" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
