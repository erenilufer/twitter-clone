import { useEffect, useState } from "react";
import { getOneUser, getUsersTweets } from "../api/tweet";
import { TweetModel } from "../models/TweetModel";
import { UserModel } from "../models/UserModel";

export const useProfile = (username: string) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [tweets, setTweets] = useState<TweetModel[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getOneUser(username!)
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => setUser(null));
    getUsersTweets(username)
      .then((data) => {
        setIsLoading(false);
        setTweets(data.data.reverse());
      })
      .catch((err) => setTweets(null));
  }, [username]);
  return { user, tweets, isLoading };
};

export default useProfile;
