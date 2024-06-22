import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
const axiosSequre = axios.create({ baseURL: "https://parcelgo.vercel.app/" });
export const useAxiosSequre = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosSequre.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSequre.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        logOut().then(() => navigate("/login"));
      }
      return Promise.reject(error);
    }
  );
  return axiosSequre;
};
