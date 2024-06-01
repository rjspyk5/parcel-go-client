import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./Routing/Routing.jsx";
import { AuthProvider } from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routing}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
