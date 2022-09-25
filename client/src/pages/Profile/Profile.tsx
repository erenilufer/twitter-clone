import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import stockImage from "../../assets/stock2.jpeg";
import Loader from "../../components/Loader/Loader";
import Tweet from "../../components/Tweet/Tweet";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import useProfile from "../../hooks/useProfile";
import { TweetModel } from "../../models/TweetModel";
type Props = {};
const Profile = (props: Props) => {
  const top = useRef<any>(null);
  const { username } = useParams();

  const [isModalVisible, setIsModalVisible] = useState<any>(false);

  const { user, tweets, isLoading } = useProfile(username!);

  useEffect(() => {
    const scrollToTop = () => {
      top?.current?.scrollIntoView();
    };
    scrollToTop();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div ref={top}>
      {!user ? (
        <div className="flex flex-col justify-center items-center h-screen w-full self-center">
          <p className="text-white text-center text-3xl font-extrabold">
            Something Went Wrong
          </p>
          <p className="text-greyLighter text-center text-2xl font-bold">
            User not found
          </p>
        </div>
      ) : (
        <>
          <UpdateUserModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />

          <div className="top text-white">
            <div className="bg-[#425364] h-52"></div>
            <div className="userinfo flex justify-between px-3">
              <div className="-mt-14">
                <div className="img  inline-block overflow-hidden w-28 h-28 rounded-full">
                  <img className="w-full h-auto" src={stockImage} alt="" />
                </div>
                <h1 className="font-extrabold">{user?.name} </h1>
                <p className="text-xs text-[#8B98A5]">@{user?.username}</p>

                <p className="text-xs text-[#8B98A5] py-1">
                  Joined March 2020{" "}
                </p>

                <div className="flex gap-4">
                  <p className="text-xs font-bold text-white mt-1 hover:underline cursor-pointer">
                    {user?.following}
                    <span className=" font-medium text-[#8B98A5]">
                      {" "}
                      Following
                    </span>
                  </p>
                  <p className="text-xs font-bold text-white mt-1 hover:underline cursor-pointer ">
                    {user?.followers}
                    <span className=" font-medium text-[#8B98A5]">
                      {" "}
                      Followers
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => setIsModalVisible(true)}
                  className="py-2 px-3  hover:bg-[#404951] border border-[#38444d] text-xs font-semibold mt-2 rounded-2xl duration-200"
                >
                  Set up profile
                </button>
              </div>
            </div>
            <div className="flex    w-full mt-5 border-b border-b-[#38444d] ">
              <div className=" w-full flex items-center justify-center p-1 py-3 hover:bg-[#404951] duration-200 cursor-pointer">
                <h1 className="text-xs text-center text-[#8B98A5] font-extrabold">
                  Tweets
                </h1>
              </div>
              <div className=" w-full flex items-center justify-center p-1 py-3 hover:bg-[#404951] duration-200 cursor-pointer">
                <h1 className="text-xs text-center text-[#8B98A5] font-extrabold ">
                  Tweets and replies
                </h1>
              </div>
              <div className="w-full flex items-center justify-center  p-1 py-3 hover:bg-[#404951] duration-200 cursor-pointer">
                <h1 className="text-xs text-center text-[#8B98A5] font-extrabold">
                  Media
                </h1>
              </div>
              <div className="w-full flex items-center justify-center p-1 py-3 hover:bg-[#404951] duration-200 cursor-pointer">
                <h1 className="text-xs text-center text-[#8B98A5] font-extrabold">
                  Likes
                </h1>
              </div>
            </div>
          </div>
          <div>
            {tweets?.map((tweet: TweetModel) => (
              <Tweet tweet={tweet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
