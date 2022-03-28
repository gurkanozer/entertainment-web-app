import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const getMovies = () => {
  return API.get("/movies");
};

export const login = (data) => {
  return API.post("/login", data);
};

export const register = (data) => {
  return API.post("/register", data);
};
