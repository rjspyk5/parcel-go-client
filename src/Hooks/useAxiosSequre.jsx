import axios from "axios";
const axiosSequre = axios.create({ baseURL: "http://localhost:5000" });
export const useAxiosSequre = () => {
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

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  return axiosSequre;
};
