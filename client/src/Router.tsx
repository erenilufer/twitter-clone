import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { RootState } from "./redux/store";

const Router = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const token = JSON.parse(localStorage.getItem("token")!)?.accessToken;
  useEffect(() => {
    if (user) {
      axios.defaults.headers.common = {
        Authorization: "Bearer " + token,
      };
    }
  }, [token]);
  return (
    <>
      {!user ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to={"/login"} />}></Route>
        </Routes>
      ) : (
        <>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:username" element={<Profile />} />
              <Route path="/login" element={<Navigate to={"/"} />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Layout>
        </>
      )}
    </>
  );
};

export default Router;
