import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "@/components/ErrorPage/ErrorPage";
import { Login } from "@/components/Login/Login";
import { Registration } from "@/components/Registration/Registration";
import { Home } from "@/Pages/Home/Home";
import path from "path";
import { AdminDashboard } from "@/Pages/Dashboard/AdminDashboard/AdminDashboard";
import { Dashboard } from "@/Layout/Dashboard";
import { UserDashboard } from "@/Pages/Dashboard/UserDashboard/UserDashboard";
import { DeliveryHeroDashboard } from "@/Pages/Dashboard/DevliveryHeroDashboard/DeliveryHeroDashboard";
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
    children: [
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "user",
        element: <UserDashboard />,
      },
      {
        path: "deliveryhero",
        element: <DeliveryHeroDashboard />,
      },
    ],
  },
]);
