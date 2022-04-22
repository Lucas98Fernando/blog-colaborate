import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import { ILoginRequest } from "../types/auth";
import router from "@/router";
import storage from "@/helpers/storage";

class AuthServices {
  async login(payload: ILoginRequest): Promise<AxiosResponse> {
    const { data, status }: AxiosResponse = await api.post(
      "/auth/login",
      payload
    );
    if (status === 200) {
      storage.setLocalAccessToken(data.token);
      router.push("/");
    }
    return data;
  }
}

export default new AuthServices();
