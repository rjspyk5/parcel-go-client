import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "@/components/ErrorPage/ErrorPage";
import { Login } from "@/components/Login/Login";
import { Registration } from "@/components/Registration/Registration";
import { Home } from "@/Pages/Home/Home";

import { Dashboard } from "@/Layout/Dashboard";

import { PrivateRoute } from "@/components/privateRoute/PrivateRoute";
export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);
