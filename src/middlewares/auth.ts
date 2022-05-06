import { NavigationGuardNext, Router, RouteLocation } from "vue-router";
import storage from "@/helpers/storage";

export default async function AuthMiddleware(
  router: Router,
  to: RouteLocation,
  next: NavigationGuardNext
) {
  const token: string = storage.getLocalAccessToken() || "";

  const guestRoutes: string[] = [
    "Login",
    "Register",
    "ForgotPassword",
    "RecoverAccount",
  ];

  if (!token && !guestRoutes.includes(String(to.name)))
    return to.name === "Start"
      ? next()
      : router.replace({ name: guestRoutes[0] });
  if (token && guestRoutes.includes(String(to.name))) router.replace("/home");
  else next();
}
