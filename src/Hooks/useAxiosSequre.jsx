import axios from "axios";
const axiosSequre = axios.create({ baseURL: "http://localhost:5000" });
export const useAxiosSequre = () => {
  return axiosSequre;
};
