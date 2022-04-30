import router from "@/router";
import eventBus from "@/helpers/eventBus";
import { AxiosError } from "axios";

const loginPage = "/auth/login";

export function errorResponse(error: AxiosError) {
  switch (error.response?.status) {
    case 400:
      eventBus.emit("show-base-dialog", {
        title: "Atenção",
        type: "error",
        message: error.response.data.error,
      });
      break;
    case 401:
      eventBus.emit("show-base-dialog", {
        title: "Credenciais inválidas",
        type: "error",
        message: error.response.data.error,
      });
      setTimeout(() => router.push(loginPage), 3000);
      break;
    case 403:
      eventBus.emit("show-base-dialog", {
        title: "Você não possui autorização",
        type: "error",
        message: error.response.data.error,
      });
      setTimeout(() => router.push(loginPage), 3000);
      break;
    case 404:
      break;
    default:
      router.push(loginPage);
  }
  return Promise.reject(error);
}
