import { RouteRecordRaw } from "vue-router";
import HomeRoutes from "@/modules/home/routes";

const MainLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/start",
    component: () => import("./MainLayout.vue"),
    children: [...HomeRoutes],
  },
];

export default MainLayoutRoutes;
