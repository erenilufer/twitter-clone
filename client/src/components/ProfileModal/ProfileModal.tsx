import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";
import { AppDispatch, RootState } from "../../redux/store";

type Props = {
  isProfileModalVisible: boolean;
};

const ProfileModal = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);
  const { isProfileModalVisible } = props;
  if (!isProfileModalVisible) {
    return <></>;
  }

  return createPortal(
    <div className="bg-greyDarker  shadow-sm shadow-greyLighter absolute left-0 bottom-20   min-w-[180px] w-full  rounded-2xl cursor-default">
      <div className="flex items-center gap-2 p-3 border-b border-b-grey">
        <img
          className="object-cover w-8  h-8 rounded-full"
          src={user?.image}
          alt=""
        />
        <div>
          <h1 className="text-xs font-bold">{user?.name}</h1>
          <p className="text-xs text-greyLighter font-bold">
            @{user?.username}
          </p>
        </div>
      </div>
      <button
        onClick={() => dispatch(logoutUser(null))}
        className="py-3 px-2  w-full text-xs font-semibold  hover:bg-grey rounded-b-2xl"
      >
        Log out @{user?.username}
      </button>
    </div>,
    document.getElementById("profile")!
  );
};

export default ProfileModal;
