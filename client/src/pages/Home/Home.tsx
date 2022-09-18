import React from "react";
import SideNavigation from "../../components/SideNavigation/SideNavigation";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="h-screen  bg-[#1E2733]">
      <div className="flex justify-between mx-auto max-w-5xl includes 3 component">
        <SideNavigation/>
        <div>Feed</div>
        <div>RightBar</div>

      </div>
    </div>
  );
};

export default Home;
