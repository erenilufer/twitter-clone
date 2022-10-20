import { CalendarIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Tweet from "../../components/Tweet/Tweet";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import useProfile from "../../hooks/useProfile";
import { TweetModel } from "../../models/TweetModel";
import { RootState } from "../../redux/store";

const Profile = () => {
  const top = useRef<HTMLDivElement>(null);
  const { username } = useParams();

  const [isModalVisible, setIsModalVisible] = useState<any>(false);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const { user, tweets, isLoading } = useProfile(username!);
  const date = moment(user?.createdAt).format("ll");

  useEffect(() => {
    const scrollToTop = () => {
      top?.current?.scrollIntoView();
    };
    scrollToTop();
  }, [tweets]);

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
          {isModalVisible && (
            <UpdateUserModal
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          )}

          <div className="top text-white">
            <div className="bg-[#425364] md:h-48 h-36"></div>
            <div className="userinfo flex justify-between items-start  px-3">
              <div className="-mt-14">
                <img
                  className="object-cover w-28 h-28 rounded-full mb-2"
                  src={user.image}
                  alt=""
                />
                <h1 className="font-extrabold">{user?.name} </h1>
                <p className="text-xs text-[#8B98A5]">@{user?.username}</p>
                <p className="flex items-center text-xs text-[#8B98A5] py-1">
                  <CalendarIcon className="w-4 h-4 mr-1 " />
                  {`Joined ${date}`}
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
              {currentUser?._id === user._id && (
                <div>
                  <button
                    onClick={() => setIsModalVisible(true)}
                    className="py-2 px-3   hover:bg-[#404951] border border-[#38444d] text-xs font-semibold mt-2 rounded-2xl duration-200"
                  >
                    Edit profile
                  </button>
                </div>
              )}
            </div>
            <div className="mt-2 px-3">
              <p className="text-xs">{user.bio}</p>
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
              <Tweet key={tweet._id} tweet={tweet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
