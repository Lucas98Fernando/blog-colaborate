import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { default as mainLayoutRoutes } from "@/layouts/main/routes";
import { default as authLayoutRoutes } from "@/layouts/auth/routes";
import { default as errorLayoutRoutes } from "@/layouts/error/routes";
import AuthMiddleware from "@/middlewares/auth";

const routes: Array<RouteRecordRaw> = [
  ...mainLayoutRoutes,
  ...authLayoutRoutes,
  ...errorLayoutRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Blog Colaborate - ${to.meta.title}`;
  AuthMiddleware(router, to, next);
});

export default router;
