import { defineStore } from "pinia";
import { PostResponse } from "../types/posts";
import postsServices from "../services/posts";

export const usePostStore = defineStore("posts", {
  state: () => ({
    // posts_approved: [],
    posts_by_user: <PostResponse[]>[],
  }),
  actions: {
    // async getPostsApproved() {
    //   try {
    //     const { data } = await api("/post/get-approved");
    //     this.posts_approved = data;
    //   } finally {
    //     //
    //   }
    // },
    async ActionGetPostsByUser() {
      const response = await postsServices.postsByUser();
      this.posts_by_user = response;
    },
  },
});
