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
];

export default HomeRoutes;
