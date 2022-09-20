import axios from "axios";

export const getTweets = async () => {
  const response = await axios
    .get("http://localhost:3001/tweets")
    .then((data) => data.data);
  return response;
};

export const createTweet = async (credentials: any) => {
  const { authorName, textContent } = credentials;
  await axios
    .post("http://localhost:3001/tweets/createTweet", {
      authorName,
      textContent,
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err));
};
