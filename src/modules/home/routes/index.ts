import { RouteRecordRaw } from "vue-router";

const HomeRoutes: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: "Home",
    meta: {
      title: "Home",
    },
    component: () => import("../pages/Home.vue"),
  },
];

export default HomeRoutes;
