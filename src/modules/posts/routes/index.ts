import { RouteRecordRaw } from "vue-router";

const PostRoutes: Array<RouteRecordRaw> = [
  {
    path: "posts",
    name: "Posts",
    meta: {
      title: "Postagens",
      transition: {
        enterClass: "animate__fadeInLeft animate__slow",
        leavesClass: "animate__fadeInRight animate__slow",
      },
    },
    component: () => import("../pages/PostsPage.vue"),
  },
];

export default PostRoutes;
