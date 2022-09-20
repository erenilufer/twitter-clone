import Feed from "../../components/Feed/Feed";
import FeedHeader from "../../components/FeedHeader/FeedHeader";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <FeedHeader />
      <Feed />
    </>
  );
};

export default Home;
