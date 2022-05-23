import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import { PostResponse } from "../types/posts";

class PostsServices {
  public async postsByUser() {
    const { data }: AxiosResponse<PostResponse[]> = await api(
      "/post/get-by-user"
    );
    return data;
  }
}

export default new PostsServices();
