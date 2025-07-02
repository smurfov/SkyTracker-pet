import { ROUTES } from "../routes";

interface IHeaderNav {
  path: string;
  name: string;
  icon: string;
}

export const headerNavData: IHeaderNav[] = [
  {
    path: ROUTES.home.path,
    name: ROUTES.home.name,
    icon: "home",
  },
  {
    path: ROUTES.contacts.path,
    name: ROUTES.contacts.name,
    icon: "phone",
  },
  {
    path: ROUTES.favorite.path,
    name: ROUTES.favorite.name,
    icon: "star",
  },
] as const;
