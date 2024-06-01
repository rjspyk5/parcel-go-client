import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "@/components/ErrorPage/ErrorPage";
import { Login } from "@/components/Login/Login";
import { Registration } from "@/components/Registration/Registration";
export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
    ],
  },
]);
