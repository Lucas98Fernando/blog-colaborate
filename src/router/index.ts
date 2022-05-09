import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import mainLayoutRoutes from "@/layouts/main/routes";
import authLayoutRoutes from "@/layouts/auth/routes";
import errorLayoutRoutes from "@/layouts/error/routes";
import AuthMiddleware from "@/middlewares/auth";
import startRoutes from "@/modules/start/routes";
import { routeState } from "@/layouts/main/ui/routeState";

const routes: Array<RouteRecordRaw> = [
  ...mainLayoutRoutes,
  ...authLayoutRoutes,
  ...errorLayoutRoutes,
  ...startRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Blog Colaborate - ${to.meta.title}`;
  routeState.value = String(to.meta?.title);
  AuthMiddleware(router, to, next);
});

export default router;
