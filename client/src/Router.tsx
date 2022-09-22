import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
interface Props {}

const Router = (props: Props) => {
  // Auth Guard will be added
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default Router;
