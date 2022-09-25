import { useEffect, useRef } from "react";
import Feed from "../../components/Feed/Feed";
import FeedHeader from "../../components/FeedHeader/FeedHeader";

interface Props {}

const Home = (props: Props) => {
  const top = useRef<any>(null);
  useEffect(() => {
    const scrollToTop = () => {
      top?.current?.scrollIntoView();
    };
    scrollToTop();
  }, []);
  return (
    <div ref={top}>
      <FeedHeader />
      <Feed />
    </div>
  );
};

export default Home;
