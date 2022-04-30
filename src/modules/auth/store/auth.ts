import { defineStore } from "pinia";
import authServices from "../services/auth";
import {
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  RecoverAccountRequest,
  RegisterRequest,
} from "../types/auth";

export const authStore = defineStore("auth", {
  state: () => ({
    user: <LoginResponse>{},
  }),
  actions: {
    async ActionLogin(payload: LoginRequest) {
      return await authServices
        .login(payload)
        .then((response) => (this.user = response));
    },
    ActionRegister(payload: RegisterRequest) {
      return authServices.register(payload);
    },
    ActionForgotPassword(payload: ForgotPasswordRequest) {
      return authServices.forgotPassword(payload);
    },
    ActionRecoverAccount(payload: RecoverAccountRequest, token: string) {
      return authServices.recoverAccount(payload, token);
    },
    ActionRecoverAccountValidateToken(token: string) {
      return authServices.recoverAccountValidateToken(token);
    },
  },
});
