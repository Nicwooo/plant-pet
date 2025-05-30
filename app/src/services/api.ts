import axios from "axios";

const API_KEY = process.env.NEXT_API_KEY;
const BACKEND_URL = process.env.NEXT_BACKEND_URL;

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
  withCredentials: true,
});

export const formDataApi = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data",
    "x-api-key": API_KEY,
  },
  withCredentials: true,
});

export default api;
