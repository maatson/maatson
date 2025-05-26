// services/api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-api.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optionally add interceptors for auth
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
