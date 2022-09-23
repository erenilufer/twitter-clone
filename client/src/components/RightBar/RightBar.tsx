import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const RightBar = (props: Props) => {
  return (
    <div className="lg:block hidden flex-1 ml-3 ">
      <div className="sticky top-2 text-white ">
        <div className="relative flex items-center  bg-greyDarker p-2 rounded-2xl mb-4 ">
          <MagnifyingGlassIcon className="w-5 h-5 absolute text-greyLighter " />
          <input
          
            className="bg-transparent pl-7  focus:outline-none text-white text-sm font-semibold flex-1  bg-transparent"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
        <div className=" bg-greyDarker  rounded-2xl">
          <h1 className="font-extrabold mb-3 px-4 pt-4">Trends for you</h1>
          {[...Array(8)].map(() => {
            return (
              <div className="px-3 py-2 hover:bg-grey duration-300 cursor-pointer ">
                <p className="text-[11px] font-bold text-greyLighter">Politics</p>
                <h1 className="text-sm font-extrabold ">Trend</h1>
                <p className="text-[11px] font-bold text-greyLighter">
                  728 Tweets
                </p>
              </div>
            );
          })}
          <div className="px-3 py-2 hover:bg-grey duration-300 cursor-pointer ">
            <h1 className="text-blue text-xs font-semibold">Show more</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
