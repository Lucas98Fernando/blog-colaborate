import { RouteRecordRaw } from "vue-router";

const ErrorLayoutRoutes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    name: "Página não encontrada",
    meta: {
      title: "Ops... Página não encontrada!",
    },
    component: () => import("./PageNotFound.vue"),
  },
];

export default ErrorLayoutRoutes;
