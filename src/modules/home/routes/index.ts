import { RouteRecordRaw } from "vue-router";

const HomeRoutes: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: "Home",
    meta: {
      title: "Início",
    },
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "about",
    name: "About",
    meta: {
      title: "Sobre",
    },
    component: () => import("../pages/AboutPage.vue"),
  },
];

export default HomeRoutes;
