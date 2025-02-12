import { useRoutes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Register from "../pages/User_control/Register";
import Login from "../pages/user_control/Login";
import Forget_password from "../pages/user_control/Forget_password";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "forget_password", element: <Forget_password /> },
      ],
    },
  ]);
};

export default Routes;
