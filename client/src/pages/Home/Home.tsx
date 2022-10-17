import { useEffect, useRef } from "react";
import Feed from "../../components/Feed/Feed";
import FeedHeader from "../../components/FeedHeader/FeedHeader";

const Home = () => {
  const top = useRef<HTMLDivElement>(null);
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
