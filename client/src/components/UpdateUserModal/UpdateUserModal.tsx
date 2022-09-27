import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  AtSymbolIcon,
  BackwardIcon,
  CodeBracketIcon,
  InboxIcon,
  PhotoIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import stockImage from "../../assets/stock2.jpeg";

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: any;
};

const UpdateUserModal = (props: Props) => {
  const [page, setPage] = useState(0);
  const { isModalVisible, setIsModalVisible } = props;
  useEffect(() => {
    setPage(0);
  }, [isModalVisible]);
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
        {page === 0 ? (
          <>
            <div className="text-white flex justify-between items-center mb-5 ">
              <h1 className="text-lg font-extrabold">Update your Profile</h1>
              <XCircleIcon
                onClick={() => {
                  setIsModalVisible(false);
                }}
                className="w-8 h-8 cursor-pointer  text-greyLighter hover:text-white duration-200"
              />
            </div>
            <div className="img self-center inline-block overflow-hidden  w-24  h-24 mb-2 rounded-full">
              <img className="w-full h-auto" src={stockImage} alt="" />
            </div>
            <label className="self-center">
              <input className="p-12 " type="file" />

              <PhotoIcon className="text-blue self-center left-1 w-5 h-5 cursor-pointer " />
            </label>

            <div
              className="py-2 px-4 rounded-2xl cursor-pointer bg-white hover:bg-whiteDarker duration-200 font-bold self-end"
              onClick={() => setPage(page + 1)}
            >
              Next
            </div>
          </>
        ) : (
          <div>
            <div className="flex items-center gap-4">
              <ArrowLeftCircleIcon
                onClick={() => setPage(page - 1)}
                className="w-8 h-8 text-greyLighter hover:text-white cursor-pointer duration-200"
              />
              <h1 className="text-white  text-lg font-extrabold">
                Update your personal info
              </h1>
            </div>
            <form className="flex flex-col mt-5  gap-4 ">
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
                <AtSymbolIcon className="absolute left-1 w-5 h-5 text-greyLighter" />
                <input
                  className=" text-white bg-transparent pl-8 focus:outline-none   p-1 font-bold"
                  placeholder="Email"
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
              </div>
            </form>
            <div className="flex justify-end mt-4  ">
              <button className="py-2 px-4 rounded-2xl bg-white hover:bg-whiteDarker duration-200 font-bold  cursor-pointer  ">
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("layout")!
  );
};

export default UpdateUserModal;
