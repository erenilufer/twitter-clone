import axios from "axios";
import { UserModel } from "../models/UserModel";

export const updateUser = async (userID: string, userCredentials: any) => {
  const response = axios.put(
    "http://localhost:3001/user/" + userID,
    userCredentials
  );

  return response;
};
