import { defineStore } from "pinia";
import authServices from "../services/auth";
import {
  IForgotPasswordRequest,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
} from "../types/auth";

export const authStore = defineStore("auth", {
  state: () => ({
    user: <ILoginResponse>{},
  }),
  actions: {
    async ActionLogin(payload: ILoginRequest) {
      return await authServices
        .login(payload)
        .then((response) => (this.user = response));
    },
    ActionRegister(payload: IRegisterRequest) {
      return authServices.register(payload);
    },
    ActionForgotPassword(payload: IForgotPasswordRequest) {
      return authServices.forgotPassword(payload);
    },
  },
});
