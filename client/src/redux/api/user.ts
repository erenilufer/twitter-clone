import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import Toast from "../../helpers/Toast";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userCredentials: any) => {
    const response = await axios
      .post("http://localhost:3001/auth/register", userCredentials)
      .then((data) => {
        Toast("Success", "User registered successfully!");

        return data.data;
      })
      .catch((err) => Toast("Error", err.response.data.error.message));
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials: any) => {
    const response = await axios
      .post("http://localhost:3001/auth/login", userCredentials)
      .then((data) => {
        console.log(data.data.accessToken);
        if (data.data?.error) {
          console.log(data.data.error);

          Toast("Error", data.data.error?.message);

          return data.data;
        }
        localStorage.setItem("token", JSON.stringify(data.data));
        axios.defaults.headers.common = {
          Authorization: "Bearer " + data.data.accessToken,
        };
        return data.data.user;
      });

    return response;
  }
);
