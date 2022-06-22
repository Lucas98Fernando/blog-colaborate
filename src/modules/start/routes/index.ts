import { RouteRecordRaw } from "vue-router";

const HomeRoutes: Array<RouteRecordRaw> = [
  {
    path: "/start",
    name: "Start",
    meta: {
      title: "O seu blog de tecnologia",
    },
    component: () => import("../pages/StartBlog.vue"),
  },
  {
    path: "/view-post/:info*",
    name: "ViewPost",
    meta: {
      title: "Visualizar postagem",
    },
    component: () => import("../pages/ViewPost.vue"),
  },
];

export default HomeRoutes;
