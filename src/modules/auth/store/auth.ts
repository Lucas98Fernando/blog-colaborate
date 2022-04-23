import { defineStore } from "pinia";
import authServices from "../services/auth";
import { ILoginRequest, IRegisterRequest } from "../types/auth";

export const authStore = defineStore("auth", {
  state: () => ({
    user: {},
  }),
  actions: {
    ActionLogin(payload: ILoginRequest) {
      return authServices.login(payload);
    },
    ActionRegister(payload: IRegisterRequest) {
      return authServices.register(payload);
    },
  },
});
