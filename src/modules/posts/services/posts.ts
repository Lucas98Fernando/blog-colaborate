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
      eventBus.emit("fetch-posts");
    }
  }

  async updatePost(body: FormData, idPost: number): Promise<void> {
    const { data, status }: AxiosResponse = await api.put(
      `/post/update/${idPost}`,
      body
    );
    if (status === 200) {
      eventBus.emit("show-base-dialog", {
        title: "Postagem atualizada",
        type: "success",
        message: data.message,
      });
      eventBus.emit("fetch-posts");
    }
  }

  async approvalPost(body: FormData, idPost: number): Promise<void> {
    const { data, status }: AxiosResponse = await api.put(
      `/post/approval/${idPost}`,
      body
    );
    if (status === 200) {
      eventBus.emit("show-base-dialog", {
        title: "Postagem aprovada",
        type: "success",
        message: data.message,
      });
      eventBus.emit("fetch-posts");
    }
  }
}

export default new PostsServices();
