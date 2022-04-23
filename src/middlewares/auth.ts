import { NavigationGuardNext, Router, RouteLocation } from "vue-router";
import storage from "@/helpers/storage";

export default async function AuthMiddleware(
  router: Router,
  to: RouteLocation,
  next: NavigationGuardNext
): Promise<void> {
  const token: string = storage.getLocalAccessToken() || "";
  const guestRoutes: string[] = ["Login", "Register", "Forgot password"];

  if (!token && !guestRoutes.includes(String(to.name)))
    router.replace({ name: guestRoutes[0] });
  if (token && guestRoutes.includes(String(to.name))) router.replace("/home");
  else next();
}
