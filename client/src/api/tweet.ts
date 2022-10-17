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
  const { authorName, authorUsername, authorID, authorImage, textContent } =
    credentials;
  await axios.post("http://localhost:3001/tweets/createTweet", {
    authorName,
    authorUsername,
    authorID,
    authorImage,
    textContent,
  });
};
export const getUsersTweets = async (authorID: string) => {
  const response = await axios.get<TweetModel[]>(
    "http://localhost:3001/tweets/" + authorID
  );
  return response;
};
export const updateTweet = async (userID: string, userCredentials: any) => {
  const { authorImage, authorName, authorUsername } = userCredentials;
  axios.defaults.headers.common = {
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("token")!).accessToken,
  };
  await axios.put("http://localhost:3001/tweets/" + userID, {
    authorImage,
    authorName,
    authorUsername,
  });
};
