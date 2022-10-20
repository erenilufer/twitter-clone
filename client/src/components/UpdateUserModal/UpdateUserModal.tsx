import {
  ArrowLeftCircleIcon,
  PhotoIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTweet } from "../../api/tweet";
import { updateUser } from "../../api/user";
import { setUser } from "../../redux/slices/authSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Toast from "../../helpers/Toast";

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: any;
};

const UpdateUserModal = (props: Props) => {
  let navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(0);
  const { isModalVisible, setIsModalVisible } = props;

  const user = useSelector((state: RootState) => state.auth.user);

  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [bio, setBio] = useState(user?.bio);
  const [email, setEmail] = useState(user?.email);
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    setPage(0);
    isModalVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isModalVisible]);

  useEffect(() => {
    const formData = new FormData();
    file && formData.append("file", file, user?._id);

    file &&
      axios
        .post("http://localhost:3001/upload/image", formData, {})
        .then((res) => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        });

    updateUser(user?._id!, {
      image: "http://localhost:3001/images/" + user?._id + ".jpeg",
      id: user?._id,
    }).then((data) => dispatch(setUser(data.data)));
    updateTweet(user?._id!, {
      authorImage: "http://localhost:3001/images/" + user?._id + ".jpeg",
      authorName: user?.name,
      authorUsername: user?.username,
    });
  }, [file]);

  const onSubmit = (e: any) => {
    updateUser(user?._id!, {
      name,
      username,
      email,
      bio,
      id: user?._id,
    })
      .then((data) => {
        const user = data.data;
        dispatch(setUser(data.data));
        updateTweet(user?._id!, {
          authorImage: "http://localhost:3001/images/" + user?._id + ".jpeg",
          authorName: user?.name,
          authorUsername: user?.username,
        });
      })
      .then(() => {
        Toast("Success", "User informations updated");
        navigate("/user/" + username);
        setIsModalVisible(false);
      });
  };
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
              <h1 className="text-lg font-extrabold">
                Update your profile photo
              </h1>
              <XCircleIcon
                onClick={() => {
                  setIsModalVisible(false);
                }}
                className="w-8 h-8 cursor-pointer  text-greyLighter hover:text-white duration-200"
              />
            </div>
            <img
              className="w-36  h-36  rounded-full object-cover self-center mb-2"
              src={user?.image}
              alt=""
            />
            <label className="self-center flex gap-1">
              <input
                accept="image/*"
                className="p-12 "
                type="file"
                onChange={(e) => setFile(e.target.files![0])}
              />
              <PhotoIcon className="text-blue self-center  w-4 h-4 cursor-pointer " />

              <p className="text-sm text-blue self-center  cursor-pointer ">
                Change Profile Photo
              </p>
            </label>

            <div
              className="py-2 px-4 rounded-2xl cursor-pointer bg-white hover:bg-whiteDarker duration-200 font-bold self-end"
              onClick={() => setPage((prevState) => prevState + 1)}
            >
              Next
            </div>
          </>
        ) : (
          <div>
            <div className="flex items-center gap-4">
              <ArrowLeftCircleIcon
                onClick={() => setPage((prevState) => prevState - 1)}
                className="w-8 h-8 text-greyLighter hover:text-white cursor-pointer duration-200"
              />
              <h1 className="text-white  text-lg font-extrabold">
                Update your personal info
              </h1>
            </div>
            <form className="flex flex-col mt-5  gap-4 ">
              <div className="flex flex-col">
                <h1 className="text-white font-extrabold mb-2 px-2">Name</h1>

                <input
                  className="bg-greyDarker text-white  px-2 focus:outline-grey  p-1 font-bold   rounded-xl"
                  placeholder="Erenilufer"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={12}
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white font-extrabold mb-2 px-2">
                  Username
                </h1>

                <input
                  className="bg-greyDarker text-white  px-2 focus:outline-grey    p-1 font-bold   rounded-xl"
                  placeholder="Erenilufer"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={12}
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-white font-extrabold mb-2 px-2">Email</h1>

                <input
                  className="bg-greyDarker text-white  px-2 focus:outline-grey   p-1 font-bold   rounded-xl"
                  placeholder="eren.nilufer@outlook.com"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col  justify-center  ">
                <h1 className="text-white font-extrabold mb-2 px-2">Bio</h1>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={5}
                  className=" text-white bg-greyDarker px-2 focus:outline-grey   p-1 font-bold   rounded-xl"
                />
              </div>
            </form>
            <div className="flex justify-end mt-4">
              <button
                onClick={onSubmit}
                className="py-2 px-4 rounded-2xl bg-white hover:bg-whiteDarker duration-200 font-bold  cursor-pointer  "
              >
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
