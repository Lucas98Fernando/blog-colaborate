import { api } from "@/http/api";
import { AxiosResponse } from "axios";
import { PostResponse } from "../types/posts";
import eventBus from "@/helpers/eventBus";

class PostsServices {
  async postsAll() {
    const { data }: AxiosResponse<PostResponse> = await api("/post/get-all");
    return data;
  }

  async postsByUser() {
    const { data }: AxiosResponse<PostResponse> = await api(
      "/post/get-by-user"
    );
    return data;
  }

  async postsApproved() {
    const { data }: AxiosResponse<PostResponse> = await api(
      "/post/get-approved"
    );
    return data;
  }

  async postsApprovedByUser() {
    const { data }: AxiosResponse<PostResponse> = await api(
      "/post/get-approved-by-user"
    );
    return data;
  }

  async postsWaitingApproval() {
    const { data }: AxiosResponse<PostResponse> = await api(
      "/post/get-waiting-approval"
    );
    return data;
  }

  async postsWaitingApprovalByUser() {
    const { data }: AxiosResponse<PostResponse> = await api(
      "/post/get-waiting-approval-by-user"
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

  async approvalPost(idPost: number): Promise<void> {
    const { data, status }: AxiosResponse = await api.put(
      `/post/approval/${idPost}`
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

  async deletePost(idPost: number): Promise<void> {
    const { status }: AxiosResponse = await api.delete(
      `/post/delete/${idPost}`
    );
    if (status === 200) {
      eventBus.emit("show-base-dialog", {
        title: "Postagem excluída",
        type: "success",
        message: "Postagem excluída com sucesso!",
      });
      eventBus.emit("fetch-posts");
    }
  }
}

export default new PostsServices();
