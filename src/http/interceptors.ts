import { api } from "./api";
import storage from "@/helpers/storage";
import { useRouter } from "vue-router";

const router = useRouter();
const loginPage = "/auth/login";

const interceptors = (): void => {
  api.interceptors.request.use(
    (config) => {
      const token: string = storage.getLocalAccessToken() || "";
      if (token) config.headers = { Authorization: `Bearer ${token}` };
      return config;
    },
    (error) => Promise.reject(error)
  );
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      switch (error.response.status) {
        case 400:
          break;
        case 401:
          router.push(loginPage);
          break;
        case 403:
          router.push(loginPage);
          break;
        case 404:
          break;
        default:
          router.push(loginPage);
      }
      return Promise.reject(error);
    }
  );
};

export default interceptors;
