import axios from "axios";

// Single axios instance so we don't repeat baseURL / headers
// everywhere. Vite proxy forwards /api to the backend in dev.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
});

// Attach the JWT to every outgoing request if the user is logged in
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("resumepro_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
