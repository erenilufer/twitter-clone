import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full self-center">
      <p className="text-white text-center text-3xl font-extrabold">
        Something Went Wrong
      </p>
      <p className="text-greyLighter text-center text-2xl font-bold">
        Page not found
      </p>
    </div>
  );
};

export default NotFound;
