import { Link } from "react-router-dom";
import stockImage from "../../assets/stock2.jpeg";
import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

interface Props {}

const Tweet = (props: Props) => {
  return (
    <div className="p-4  text-white border-b-[.5px] border-b-[#38444d] cursor-pointer hover:bg-[#1E2934] duration-200">
      <div className="flex gap-4 items-center ">
        <div className="img inline-block overflow-hidden  w-10  h-10 rounded-full">
          <img className="w-full h-auto" src={stockImage} alt="" />
        </div>

        <div className="textContent flex flex-col gap-1 flex-1 ">
          <Link to={"/erenilufer"}>
            <div className="flex items-center gap-2 ">
              <h1 className="font-bold text-xs hover:underline">
                Eren Nilüfer
              </h1>
              <p className="text-xs text-[#8B98A5]">@erenilufer</p>
            </div>
          </Link>

          <div>
            <p className="text-xs font-semibold">Bu bir uzun bir tweettir</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:px-14 px-5  mt-3 text-[#8B98A5]">
        <div className="flex items-center gap-1 group hover:bg-sky-900 rounded-xl duration-200 px-2 ">
          <div className="w-7 h-7   flex items-center justify-center    ">
            <ChatBubbleOvalLeftIcon className="w-5 h-5 group-hover:text-sky-500 " />
          </div>
          <span className="text-xs">52</span>
        </div>
        <div className="flex items-center gap-1 group rounded-xl duration-200 px-2 hover:bg-teal-900">
          <div className="w-7 h-7   flex items-center justify-center     ">
            <ArrowPathRoundedSquareIcon className="w-5 h-5 group-hover:text-teal-500 duration-200" />
          </div>
          <span className="text-xs group-hover:text-teal-500 duration-200">
            12
          </span>
        </div>
        <div className="flex items-center gap-1 group rounded-xl duration-200 px-2  ">
          <div className="w-7 h-7 flex items-center justify-center    duration-200">
            <HeartIcon className="w-5 h-5 group-hover:fill-red-500  group-hover:text-red-500 duration-200" />
          </div>
          <span className="text-xs group-hover:text-red-500 duration-200">
            12
          </span>
        </div>

        <div className="flex items-center gap-1 group rounded-full duration-200 px-2 hover:bg-sky-900  ">
          <div className="w-7 h-7 flex items-center justify-center    duration-200">
            <ArrowUpTrayIcon className="w-5 h-5 group-hover:text-sky-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;