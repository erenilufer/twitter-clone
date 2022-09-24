import { PhotoIcon, UserIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: any;
};

const UpdateUserModal = (props: Props) => {
  const { isModalVisible, setIsModalVisible } = props;
  useEffect(() => {
    isModalVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isModalVisible]);

  if (!isModalVisible) return <></>;

  return createPortal(
    <div
      onClick={() => {
        setIsModalVisible(false);
      }}
      className="fixed z-10 w-full h-full bg-opacity-20 backdrop-blur-lg flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-lg -mt-10 mx-5 w-full  bg-primary flex flex-col border border-grey rounded-2xl p-5 "
      >
        <div className="text-white flex justify-between items-center mb-5 ">
          <h1 className="text-lg font-extrabold">Update your Profile</h1>
          <XCircleIcon
            onClick={() => {
              setIsModalVisible(false);
            }}
            className="w-8 h-8 cursor-pointer  text-greyLighter hover:text-white duration-200"
          />
        </div>
        <form className="flex flex-col items-start gap-4">
          <div className="flex flex-col  justify-center relative bg-greyDarker rounded-xl">
            <UserIcon className="absolute left-1 w-5 h-5 text-greyLighter" />
            <input
              className=" text-white bg-transparent pl-8 focus:outline-none   p-1 font-bold"
              placeholder="Username"
              value={"erenilufer"}
              type="text"
            />
          </div>
          <div className="flex flex-col  justify-center relative bg-greyDarker rounded-xl">
            <UserIcon className="absolute left-1 w-5 h-5 text-greyLighter" />
            <input
              className=" text-white bg-transparent pl-8 focus:outline-none   p-1 font-bold"
              placeholder="Username"
              value={"erenilufer"}
              type="text"
            />
          </div>{" "}
          <div className="flex flex-col  justify-center relative bg-greyDarker rounded-xl">
            <PhotoIcon className="absolute left-1 w-5 h-5 text-greyLighter" />
            <input
              className=" text-white bg-transparent pl-8 focus:outline-none   p-1 font-bold"
              placeholder="Username"
              value={"erenilufer"}
              type="text"
            />
          </div>{" "}
          <div className="flex flex-col  justify-center relative bg-greyDarker rounded-xl">
            <UserIcon className="absolute left-1 w-5 h-5 text-greyLighter" />
            <input
              className=" text-white bg-transparent pl-8 focus:outline-none   p-1 font-bold"
              placeholder="Username"
              value={"erenilufer"}
              type="text"
            />
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("layout")!
  );
};

export default UpdateUserModal;
