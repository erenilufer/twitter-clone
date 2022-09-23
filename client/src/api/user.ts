import axios from "axios";

export const registerUser = async (userCredentials: any) => {
  await axios
    .post("http://localhost:3001/auth/register", userCredentials)
    .then((data) => console.log(data));
};
export const loginUser = async (userCredentials: any) => {
  await axios
    .post("http://localhost:3001/auth/login", userCredentials)
    .then((data) => localStorage.setItem("token", JSON.stringify(data.data)));
};
