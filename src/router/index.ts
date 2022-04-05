import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { default as homeRoutes } from "@/modules/home/routes";
import { default as authLayoutRoutes } from "@/layouts/auth/routes";

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...authLayoutRoutes,
  {
    path: "/about",
    name: "About",
    component: () => import("../modules/example/pages/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Blog colaborate - ${to.meta.title}`;
  next();
});

export default router;
