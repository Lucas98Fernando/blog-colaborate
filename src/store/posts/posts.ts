import { defineStore } from "pinia";
import { api } from "@/http/api";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts_approved: [],
  }),
  actions: {
    async getPostsApproved() {
      try {
        const { data } = await api("/post/get-approved");
        this.posts_approved = data;
      } finally {
        //
      }
    },
  },
});
