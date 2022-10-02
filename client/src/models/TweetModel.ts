export interface TweetModel {
  authorName: string;
  authorUsername: string;
  authorImage: string;
  comments: any[];
  createdAt: string;
  likes: number;
  retweets: number;
  textContent: string;
  updatedAt: string;
  _id: string;
}
