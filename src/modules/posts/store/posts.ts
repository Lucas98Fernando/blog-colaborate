import { defineStore } from "pinia";
import { PostResponse } from "../types/posts";
import postsServices from "../services/posts";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts_by_user: <PostResponse>{},
  }),
  actions: {
    async ActionGetPostsByUser() {
      const data = await postsServices.postsByUser();
      this.posts_by_user = data;
      return data;
    },
    async ActionCreatePost(body: FormData) {
      return await postsServices.createPost(body);
    },
    async ActionUpdatePost(body: FormData, idPost: number) {
      return await postsServices.updatePost(body, idPost);
    },
  },
});
