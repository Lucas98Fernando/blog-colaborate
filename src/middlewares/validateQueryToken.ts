import { NavigationGuardNext, RouteLocation } from "vue-router";

export default function ValidateQueryToken(
  to: RouteLocation,
  from: RouteLocation,
  next: NavigationGuardNext
) {
  const { token } = to.query;
  if (typeof token === "string") {
    const jwtRegEx = /(^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)/;
    const match = token.match(jwtRegEx);
    if (match === null) next({ path: "/auth/login" });
    else next();
  } else next({ path: "/auth/login" });
}
