import { UserMenu } from "../types/auth";

export const menuAuthor: UserMenu[] = [
  { name: "Início", icon: "home", to: "/home" },
  { name: "Posts", icon: "article", to: "/posts" },
];

export const menuAdmin: UserMenu[] = [
  ...menuAuthor,
  {
    name: "Categorias",
    icon: "category",
    to: "/categories",
  },
];
