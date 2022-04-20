import { NavigationGuardNext, Router, RouteLocation } from "vue-router";
import storage from "@/helpers/storage";

export default async function AuthMiddleware(
  router: Router,
  to: RouteLocation,
  next: NavigationGuardNext
): Promise<void> {
  const token: string = storage.getLocalAccessToken() || "";
  const [loginPage, registerPage] = ["/auth/login", "/auth/register"];

  if (!token && to.path !== loginPage && to.path !== registerPage)
    router.replace(loginPage);
  if (token && (to.path === loginPage || to.path === registerPage))
    router.replace("/");
  else next();
}
