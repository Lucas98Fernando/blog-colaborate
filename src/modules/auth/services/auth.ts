import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import {
  IForgotPasswordRequest,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
} from "../types/auth";
import router from "@/router";
import storage from "@/helpers/storage";
import eventBus from "@/helpers/eventBus";

class AuthServices {
  async login(payload: ILoginRequest): Promise<ILoginResponse> {
    const { data, status }: AxiosResponse = await api.post(
      "/auth/login",
      payload
    );
    if (status === 200) {
      storage.setLocalAccessToken(data.token);
      router.push("/home");
    }
    return data;
  }

  async register(payload: IRegisterRequest): Promise<AxiosResponse> {
    const { data, status }: AxiosResponse = await api.post(
      "/auth/register",
      payload
    );
    if (status === 201) {
      eventBus.emit("show-base-dialog", {
        title: "Ação realizada",
        type: "green",
        message: data.message,
      });
      setTimeout(() => router.push("/auth/login"), 3000);
    }
    return data;
  }

  async forgotPassword(payload: IForgotPasswordRequest): Promise<void> {
    const { status }: AxiosResponse = await api.post(
      "/auth/forgot-password",
      payload
    );
    if (status === 200) {
      eventBus.emit("show-base-dialog", {
        title: "Ação realizada",
        type: "green",
        message: "E-mail enviado com sucesso!",
      });
      setTimeout(() => router.push("/auth/login"), 3000);
    }
  }
}

export default new AuthServices();
