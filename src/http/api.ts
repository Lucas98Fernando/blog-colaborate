import axios, { AxiosInstance } from "axios";
import { errorResponse } from "./interceptors/response";
import { configRequest } from "./interceptors/request";

// Creating an instance of axios
export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Interceptors for requests
api.interceptors.request.use(configRequest, (error) => Promise.reject(error));
// Interceptors for responses
api.interceptors.response.use((response) => response, errorResponse);
