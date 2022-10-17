import axios from "axios";

export const uploadImage = async () => {
  const response = axios.post("http://localhost:3001/upload/image");
  return response;
};
