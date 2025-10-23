import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000",
  withCredentials: true,
  timeout: 15000,
});

// ✅ Interceptors (auth + error handling)
axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("auth-storage")!).state?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // handle auth expired
      console.warn("Session expired, please login again.");
    }
    return Promise.reject(err);
  },
);

export default axiosInstance;
