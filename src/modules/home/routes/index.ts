import { RouteRecordRaw } from "vue-router";

const HomeRoutes: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: "Home",
    meta: {
      title: "Início",
      transition: {
        enterClass: "animate__fadeInLeft animate__slow",
        leavesClass: "animate__fadeInRight animate__slow",
      },
    },
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "about",
    name: "About",
    meta: {
      title: "Sobre",
      transition: {
        enterClass: "animate__fadeInLeft animate__slow",
        leavesClass: "animate__fadeInRight animate__slow",
      },
    },
    component: () => import("../pages/AboutPage.vue"),
  },
];

export default HomeRoutes;
