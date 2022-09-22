import { CogIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getTweets } from "../../api/tweet";
import { TweetModel } from "../../models/TweetModel";
import Tweet from "../Tweet/Tweet";

interface Props {}

const Feed = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tweets, setTweets] = useState<TweetModel[]>();
  useEffect(() => {
    setIsLoading(true);
    getTweets().then((data) => {
      setTweets(data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <CogIcon className="mt-3 w-8 h-8   mx-auto  text-[#8B98A5] animate-spin" />
      ) : (
        <div>
          {tweets &&
            tweets.map((tweet: TweetModel) => (
              <Tweet key={tweet._id} tweet={tweet} />
            ))}
        </div>
      )}
    </>
  );
};

export default Feed;
