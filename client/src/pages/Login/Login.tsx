import { CogIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Toast from "../../helpers/Toast";
import { loginUser } from "../../redux/api/user";
import { AppDispatch, RootState } from "../../redux/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loadingState = useSelector(
    (state: RootState) => state.auth.loadingState
  );

  const email = useRef<HTMLInputElement>(null!);
  const password = useRef<HTMLInputElement>(null!);

  const isFormValid = () => {
    if (email.current?.value && password.current?.value) {
      return true;
    }
    return false;
  };

  const submitHandler = () => {
    if (!isFormValid()) {
      return Toast("Error", "Please fill all blanks!");
    }
    dispatch(
      loginUser({
        email: email.current?.value,
        password: password.current?.value,
      })
    );
  };
  return (
    <div className=" flex justify-center items-center mx-8    h-screen ">
      <div className="  max-w-md w-full bg-black p-3 flex flex-col items-center rounded-xl  ">
        <svg
          fill="#f7f9f9"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-7 h-7 mb-2 "
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
        <h1 className="text-white font-extrabold text-2xl">
          Sign in to Twitter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          className="flex flex-col gap-4 flex-1 items-center py-6 text-sm font-bold  "
          action=""
        >
          <div className="relative flex items-center  ">
            <UserIcon className="w-4 h-4 text-greyLighter absolute left-1" />
            <input
              ref={email}
              className=" text-white bg-transparent focus:outline-none rounded-md pl-6  p-1 px-2 border-grey border  "
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="relative flex items-center  ">
            <LockClosedIcon className="w-4 h-4 text-greyLighter absolute left-1" />

            <input
              ref={password}
              className=" text-white bg-transparent focus:outline-none rounded-md pl-6  p-1 px-2 border-grey border  "
              placeholder="Password"
              type="password"
            />
          </div>
          <button
            disabled={loadingState === "pending"}
            className="flex justify-center  bg-white px-4 py-2 rounded-full font-bold w-full text-sm hover:bg-whiteDarker duration-200"
            type="submit"
          >
            {loadingState === "pending" ? (
              <CogIcon className="w-5 h-5 animate-spin" />
            ) : (
              <p>Sign In</p>
            )}
          </button>
        </form>
        <p className="text-greyLighter text-xs">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-blueDarker hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
