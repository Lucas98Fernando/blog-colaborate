import { RouteRecordRaw } from "vue-router";

const CategoryRoutes: Array<RouteRecordRaw> = [
  {
    path: "categories",
    name: "Categories",
    meta: {
      title: "Categorias",
      transition: {
        enterClass: "animate__fadeInLeft animate__slow",
        leavesClass: "animate__fadeInRight animate__slow",
      },
    },
    component: () => import("../pages/CategoriesPage.vue"),
  },
];

export default CategoryRoutes;
