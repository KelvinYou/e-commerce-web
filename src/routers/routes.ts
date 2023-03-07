import * as ROUTES from "./../constants/routes";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: ROUTES.HOME,
    component: Home,
    name: "Home Screen",
    protected: false,
  },
  {
    path: ROUTES.LOGIN,
    component: Login,
    name: "Login Screen",
    protected: false,
  },
];

export default routes;