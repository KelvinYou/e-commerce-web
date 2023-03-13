import * as ROUTES from "./../constants/routes";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: ROUTES.HOME_PATH,
    component: Home,
    name: "Home Screen",
    protected: false,
  },
  {
    path: ROUTES.LOGIN_PATH,
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: ROUTES.REGISTER_PATH,
    component: Register,
    name: "Register Screen",
    protected: false,
  },
];

export default routes;