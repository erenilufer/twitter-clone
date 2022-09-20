import { useEffect, useState } from "react";
import { getTweets } from "../../api/tweet";
import { TweetModel } from "../../models/TweetModel";
import Tweet from "../Tweet/Tweet";

interface Props {}

const Feed = (props: Props) => {
  const [tweets, setTweets] = useState<TweetModel[]>();
  useEffect(() => {
    getTweets().then((data) => setTweets(data));
  }, []);
  return (
    <div>
      {tweets && tweets.map((tweet: TweetModel) => <Tweet tweet={tweet} />)}
    </div>
  );
};

export default Feed;
