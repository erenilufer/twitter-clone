import { ReactNode, useState } from "react";
import RightBar from "../RightBar/RightBar";
import SideNavigation from "../SideNavigation/SideNavigation";
import TweetModal from "../TweetModal/TweetModal";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="flex relative justify-center md:mx-auto max-w-5xl ">
      <SideNavigation
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      {isModalVisible && (
        <TweetModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
      <div className="max-w-lg w-full border-x border-grey">
        {props.children}
      </div>
      <RightBar />
    </div>
  );
};

export default Layout;
