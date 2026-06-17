import axios from "axios";
import toast from "react-hot-toast";

const apiInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.VITE_API_URL ||
    "http://localhost:3000/api",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    if (typeof window === "undefined") return config;

    try {
      const rawUser = localStorage.getItem("user");
      if (!rawUser) return config;

      const parseUserInfo = JSON.parse(rawUser);
      const token =
        parseUserInfo?.data?.data?.accessToken || parseUserInfo?.accessToken;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.warn("Failed to parse auth token from localStorage", error);
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
