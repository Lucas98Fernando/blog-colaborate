import { RouteRecordRaw } from "vue-router";
import AuthRoutes from "@/modules/auth/routes";

const AuthLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    redirect: "/auth/login",
    component: () => import("./AuthLayout.vue"),
    children: [...AuthRoutes],
  },
];

export default AuthLayoutRoutes;
