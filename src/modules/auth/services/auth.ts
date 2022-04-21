import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import { ILoginRequest } from "../types/auth";
import router from "@/router";

class AuthServices {
  async login(payload: ILoginRequest): Promise<void> {
    const { data, status }: AxiosResponse = await api.post(
      "/auth/login",
      payload
    );
    if (status === 200) router.push("/");
    return data;
  }
}

export default new AuthServices();
