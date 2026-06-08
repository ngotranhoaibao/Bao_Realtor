import axios from "axios";
import toast from "react-hot-toast";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL ,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const parseUserInfo = JSON.parse(localStorage.getItem("user"));
    const token =
      parseUserInfo?.data?.data?.accessToken || parseUserInfo?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    const msg = error?.response?.data?.message;
    if (msg) toast.error(msg);
    return Promise.reject(error);
  },
);

export default apiInstance;
