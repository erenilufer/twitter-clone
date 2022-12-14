import { ReactNode } from "react";
import RightBar from "../RightBar/RightBar";
import SideNavigation from "../SideNavigation/SideNavigation";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div
      id="layout"
      className="flex relative justify-center md:mx-auto max-w-5xl"
    >
      <SideNavigation />
      <div className="max-w-lg w-full border-x border-grey">
        {props.children}
      </div>
      <RightBar />
    </div>
  );
};

export default Layout;
