import axios from "axios";

const axiosPublic = axios.create({ baseURL: "https://parcelgo.vercel.app/" });

export const useAxiosPublic = () => {
  return axiosPublic;
};
