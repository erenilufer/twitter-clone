import FeedHeader from "../../components/FeedHeader/FeedHeader";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Tweet from "../../components/Tweet/Tweet";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="æ">
      <div className="flex gap-2 relative    justify-between mx-auto max-w-5xl includes 3 component">
        <SideNavigation />
        <div className="max-w-xl mx-auto w-full border-x border-[#38444d] ">
          <FeedHeader />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
        <div className=" lg:block hidden w-80 border-x border-[#38444d] ">
          <div className="sticky top-2 text-white ">RightBar</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
