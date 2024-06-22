import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import { ErrorPage } from "@/components/ErrorPage/ErrorPage";
import { Login } from "@/components/Login/Login";
import { Registration } from "@/components/Registration/Registration";
import { Home } from "@/Pages/Home/Home";
import { Dashboard } from "@/Layout/Dashboard";
import { PrivateRoute } from "@/components/privateRoute/PrivateRoute";
import { AdminPrivateRoute } from "@/components/adminPrivateRoute/adminPrivateRoute";
import { DeliveryMainPrivateRoute } from "@/components/deliveryManPrivateRoute/deliveryMainPrivateRoute";
import { MyDeliveryList } from "@/Pages/Dashboard/DevliveryHeroDashboard/MyDeliveryList";
import { MyReviews } from "@/Pages/Dashboard/DevliveryHeroDashboard/MyReviews";
import { AllUser } from "@/Pages/Dashboard/AdminDashboard/AllUser";
import { AllParcel } from "@/Pages/Dashboard/AdminDashboard/AllParcel";
import { AllDelivery } from "@/Pages/Dashboard/AdminDashboard/AllDelivery";
import { Statistics } from "@/Pages/Dashboard/AdminDashboard/Statistics";
import { BookParcels } from "@/Pages/Dashboard/UserDashboard/BookParcels";
import { MyParcels } from "@/Pages/Dashboard/UserDashboard/MyParcels";
import { MyProfile } from "@/Pages/Dashboard/UserDashboard/MyProfile";
import { UpdateParcel } from "@/Pages/Dashboard/UserDashboard/UpdateParcel";
import axios from "axios";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => axios("https://parcelgo.vercel.app/countdelivery"),
      },
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
      // Delivery Hero Routes
      {
        path: "mydelivery",
        element: (
          <DeliveryMainPrivateRoute>
            <MyDeliveryList />
          </DeliveryMainPrivateRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <DeliveryMainPrivateRoute>
            <MyReviews />
          </DeliveryMainPrivateRoute>
        ),
      },

      // Admin Routes
      {
        path: "alluser",
        element: (
          <AdminPrivateRoute>
            <AllUser />
          </AdminPrivateRoute>
        ),
        loader: () => fetch("https://parcelgo.vercel.app/countuser"),
      },
      {
        path: "allparcel",
        element: (
          <AdminPrivateRoute>
            <AllParcel />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "alldelivery",
        element: (
          <AdminPrivateRoute>
            <AllDelivery />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "statistics",
        element: (
          <AdminPrivateRoute>
            <Statistics />
          </AdminPrivateRoute>
        ),
      },
      // UserRotes
      {
        path: "bookparcel",
        element: <BookParcels />,
      },
      {
        path: "myparcel",
        element: <MyParcels />,
      },
      {
        path: "myprofile",
        element: <MyProfile />,
      },
      {
        path: "update/:id",
        element: <UpdateParcel />,
        loader: ({ params }) =>
          axios.get(`https://parcelgo.vercel.app/booking/${params.id}`),
      },
    ],
  },
]);
