import { default as authRoutes } from "@/modules/auth/routes";

export default [
  {
    path: "/auth",
    component: () => import("./AuthLayout.vue"),
    children: [...authRoutes],
  },
];
