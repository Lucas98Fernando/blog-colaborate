import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import {
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  RecoverAccountRequest,
  RecoverAccountTokenResponse,
  RegisterRequest,
} from "../types/auth";
import router from "@/router";
import storage from "@/helpers/storage";
import eventBus from "@/helpers/eventBus";
import { menuAdmin, menuAuthor } from "../partials/menuOptions";

class AuthServices {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const { data, status }: AxiosResponse<LoginResponse> = await api.post(
      "/auth/login",
      payload
    );
    if (status === 200) {
      storage.setUserLocalStorage(data);
      // Setting the menu for the authenticated user
      if (data.user.id_user_type === 1)
        localStorage.setItem("menu", JSON.stringify(menuAdmin));
      else localStorage.setItem("menu", JSON.stringify(menuAuthor));
      router.push("/home");
    }
    return data;
  }

  async register(payload: RegisterRequest): Promise<AxiosResponse> {
    const { data, status }: AxiosResponse = await api.post(
      "/auth/register",
      payload
    );
    if (status === 201) {
      eventBus.emit("show-base-dialog", {
        title: "Ação realizada",
        type: "success",
        message: data.message,
      });
      setTimeout(() => router.push("/auth/login"), 4000);
    }
    return data;
  }

  async forgotPassword(payload: ForgotPasswordRequest): Promise<void> {
    const { status }: AxiosResponse = await api.post(
      "/auth/forgot-password",
      payload
    );
    if (status === 200) {
      eventBus.emit("show-base-dialog", {
        title: "Ação realizada",
        type: "success",
        message: "E-mail enviado com sucesso!",
      });
      setTimeout(() => router.push("/auth/login"), 3000);
    }
  }

  async recoverAccount(payload: RecoverAccountRequest): Promise<void> {
    const { status }: AxiosResponse = await api.put(
      "/auth/recover-account",
      payload
    );
    if (status === 200) {
      eventBus.emit("show-base-dialog", {
        title: "Tudo certo!",
        type: "success",
        message: "As credenciais foram atualizadas com sucesso!",
      });
      setTimeout(() => router.push("/auth/login"), 3000);
    }
  }

  async recoverAccountValidateToken(
    token: string
  ): Promise<RecoverAccountTokenResponse> {
    const { data }: AxiosResponse<RecoverAccountTokenResponse> = await api(
      `/auth/recover-account/validate-token/${token}`
    );
    return data;
  }

  logout(): void {
    storage.removeAllLocalStorage();
    router.push("/auth/login");
  }
}

export default new AuthServices();
