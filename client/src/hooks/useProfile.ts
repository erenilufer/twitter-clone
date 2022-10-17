import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOneUser, getUsersTweets } from "../api/tweet";
import { TweetModel } from "../models/TweetModel";
import { UserModel } from "../models/UserModel";
import { RootState } from "../redux/store";

export const useProfile = (username: string) => {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const [user, setUser] = useState<UserModel | null>(null);
  const [tweets, setTweets] = useState<TweetModel[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOneUser(username!)
      .then((data) => {
        setUser(data.data);
        setIsLoading(false);
      })
      .catch((err) => setUser(null));
    getUsersTweets(user?._id!).then((data) => {
      setTweets(data.data.reverse());
    });
  }, [username, user?._id, currentUser]);
  return { user, tweets, isLoading };
};

export default useProfile;
