export default [
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
