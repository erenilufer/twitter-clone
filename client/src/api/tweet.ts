import axios from "axios";
import { TweetModel } from "../models/TweetModel";

export const getTweets = async () => {
  const response = await axios.get<TweetModel[]>(
    "http://localhost:3001/tweets"
  );

  return response;
};
export const getOneUser = async (username: string) => {
  const response = await axios.get("http://localhost:3001/user/" + username);
  return response;
};

export const createTweet = async (credentials: any) => {
  const { authorName, authorUsername, textContent } = credentials;
  await axios.post("http://localhost:3001/tweets/createTweet", {
    authorName,
    authorUsername,
    textContent,
  });
};
export const getUsersTweets = async (username: any) => {
  const response = await axios.get<TweetModel[]>(
    "http://localhost:3001/tweets/" + username
  );
  return response;
};
