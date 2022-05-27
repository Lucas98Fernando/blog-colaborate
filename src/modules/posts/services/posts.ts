import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import { PostResponse } from "../types/posts";
import eventBus from "@/helpers/eventBus";

class PostsServices {
  async postsByUser() {
    const { data }: AxiosResponse<PostResponse[]> = await api(
      "/post/get-by-user"
    );
    return data;
  }

  async createPost(body: FormData): Promise<void> {
    const { data, status }: AxiosResponse = await api.post(
      "/post/create",
      body
    );
    if (status === 201) {
      eventBus.emit("show-base-dialog", {
        title: "Postagem criada",
        type: "success",
        message: data,
      });
    }
  }
}

export default new PostsServices();
