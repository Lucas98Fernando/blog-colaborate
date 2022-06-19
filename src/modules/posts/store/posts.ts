import { defineStore } from "pinia";
import { PostResponse } from "../types/posts";
import postsServices from "../services/posts";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts_by_user: <PostResponse>{},
  }),
  actions: {
    async ActionGetPostsAll() {
      const data = await postsServices.postsAll();
      this.posts_by_user = data;
      return data;
    },

    async ActionGetPostsByUser() {
      const data = await postsServices.postsByUser();
      this.posts_by_user = data;
      return data;
    },

    async ActionGetPostsApproved() {
      const data = await postsServices.postsApproved();
      this.posts_by_user = data;
      return data;
    },

    async ActionGetPostsApprovedByUser() {
      const data = await postsServices.postsApprovedByUser();
      this.posts_by_user = data;
      return data;
    },

    async ActionGetPostsWaitingApproval() {
      const data = await postsServices.postsWaitingApproval();
      this.posts_by_user = data;
      return data;
    },

    async ActionGetPostsWaitingApprovalByUser() {
      const data = await postsServices.postsWaitingApprovalByUser();
      this.posts_by_user = data;
      return data;
    },

    async ActionCreatePost(body: FormData) {
      return await postsServices.createPost(body);
    },

    async ActionUpdatePost(body: FormData, idPost: number) {
      return await postsServices.updatePost(body, idPost);
    },

    async ActionApprovalPost(idPost: number) {
      return await postsServices.approvalPost(idPost);
    },

    async ActionDeletePost(idPost: number) {
      return await postsServices.deletePost(idPost);
    },
  },
});
