import { AxiosRequestConfig } from "axios";
import storage from "@/helpers/storage";

export function configRequest(config: AxiosRequestConfig) {
  const token: string = storage.getLocalAccessToken() || "";
  if (token) config.headers = { Authorization: `Bearer ${token}` };
  return config;
}
