import { useRouter } from "vue-router";
import eventBus from "@/helpers/eventBus";
import { AxiosError } from "axios";

const router = useRouter();
const loginPage = "/auth/login";

export function errorResponse(error: AxiosError) {
  switch (error.response?.status) {
    case 400:
      eventBus.emit("show-base-dialog", {
        title: "Atenção",
        type: "red",
        message: error.response.data.error,
      });
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
