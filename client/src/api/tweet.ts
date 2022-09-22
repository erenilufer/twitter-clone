import axios from "axios";

export const getTweets = async () => {
  const response = await axios.get("http://localhost:3001/tweets");

  return response;
};
export const getOneUser = async (username: any) => {
  const response = await axios.get("http://localhost:3001/user/" + username);
  return response;
};

export const createTweet = async (credentials: any) => {
  const { authorName, textContent } = credentials;
  await axios.post("http://localhost:3001/tweets/createTweet", {
    authorName,
    textContent,
  });
};
