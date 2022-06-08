import { RouteRecordRaw } from "vue-router";
import HomeRoutes from "@/modules/home/routes";
import PostRoutes from "@/modules/posts/routes";
import CategoryRoutes from "@/modules/categories/routes";

const MainLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/start",
    component: () => import("./MainLayout.vue"),
    children: [...HomeRoutes, ...PostRoutes, ...CategoryRoutes],
  },
];

export default MainLayoutRoutes;
