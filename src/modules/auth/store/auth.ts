import { defineStore } from "pinia";
import authServices from "../services/auth";
import { ILoginRequest } from "../types/auth";

export const authStore = defineStore("auth", {
  state: () => ({
    user: {},
  }),
  actions: {
    ActionLogin(payload: ILoginRequest) {
      return authServices.login(payload);
    },
  },
});
