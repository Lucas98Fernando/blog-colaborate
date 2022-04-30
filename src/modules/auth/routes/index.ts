import ValidateQueryToken from "@/middlewares/validateQueryToken";
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
  {
    path: "forgot-password",
    name: "ForgotPassword",
    meta: {
      title: "Enviar e-mail de recuperação de conta",
    },
    component: () => import("../pages/ForgotPassword.vue"),
  },
  {
    path: "recover-account",
    name: "RecoverAccount",
    beforeEnter(to, from, next) {
      ValidateQueryToken(to, from, next);
    },
    meta: {
      title: "Recuperação de conta",
    },
    component: () => import("../pages/RecoverAccount.vue"),
  },
];

export default AuthRoutes;
