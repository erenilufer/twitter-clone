import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneUser } from "../../api/tweet";
import stockImage from "../../assets/stock2.jpeg";
type Props = {};

const Profile = (props: Props) => {
  const { username } = useParams();
  console.log(username);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    getOneUser(username)
      .then((data) => setUser(data.data))
      .catch((err) => setUser(null));
  }, [username]);
  console.log(user);

  return (
    <div>
      <div className="top text-white">
        <div className="bg-[#425364] h-52"></div>
        <div className="userinfo flex justify-between px-3">
          <div className="-mt-14">
            <div className="img  inline-block overflow-hidden w-28 h-28 rounded-full">
              <img className="w-full h-auto" src={stockImage} alt="" />
            </div>
            <h1 className="font-extrabold">{user?.name} </h1>
            <p className="text-xs text-[#8B98A5]">@{user?.username}</p>

            <p className="text-xs text-[#8B98A5] py-1">Joined March 2020 </p>

            <div className="flex gap-4">
              <p className="text-xs font-bold text-white mt-1 hover:underline cursor-pointer">
                11
                <span className=" font-medium text-[#8B98A5]"> Following</span>
              </p>
              <p className="text-xs font-bold text-white mt-1 hover:underline cursor-pointer ">
                11
                <span className=" font-medium text-[#8B98A5]"> Followers</span>
              </p>
            </div>
          </div>
          <div>
            <button className="py-2 px-3  hover:bg-[#404951] border border-[#38444d] text-xs font-semibold mt-2 rounded-2xl duration-200">
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
    </div>
  );
};

export default Profile;
