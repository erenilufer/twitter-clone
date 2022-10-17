import { CogIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getTweets } from "../../api/tweet";
import { TweetModel } from "../../models/TweetModel";
import Tweet from "../Tweet/Tweet";

const Feed = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tweets, setTweets] = useState<TweetModel[]>();
  useEffect(() => {
    setIsLoading(true);
    getTweets().then((data) => {
      setTweets(data.data.reverse());
      setIsLoading(false);
    });
  }, []);
  console.log(tweets);

  return (
    <>
      {isLoading ? (
        <CogIcon className="mt-3 w-36 h-36   mx-auto  text-greyLighter animate-spin " />
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
