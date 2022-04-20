import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { default as homeRoutes } from "@/modules/home/routes";
import { default as authLayoutRoutes } from "@/layouts/auth/routes";
import AuthMiddleware from "@/middlewares/auth";

const routes: Array<RouteRecordRaw> = [...homeRoutes, ...authLayoutRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Blog colaborate - ${to.meta.title}`;
  AuthMiddleware(router, to, next);
});

export default router;
