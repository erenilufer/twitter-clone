import { ReactNode } from "react";
import SideNavigation from "../SideNavigation/SideNavigation";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="flex relative justify-center md:mx-auto max-w-5xl ">
      <SideNavigation />
      <div className="max-w-xl w-full border-x border-[#38444d]">
        {props.children}
      </div>
      <div className=" lg:block hidden w-80 border-x border-[#38444d] ">
        <div className="sticky top-2 text-white ">RightBar</div>
      </div>
    </div>
  );
};

export default Layout;
