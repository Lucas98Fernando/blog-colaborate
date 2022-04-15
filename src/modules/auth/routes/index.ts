import { RouteRecordRaw } from "vue-router";

const AuthRoutes: Array<RouteRecordRaw> = [
  {
    path: "login",
    name: "Login",
    meta: {
      title: "Faça o seu login",
    },
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "register",
    name: "Register",
    meta: {
      title: "Faça o seu cadastro",
    },
    component: () => import("../pages/Register.vue"),
  },
];

export default AuthRoutes;
