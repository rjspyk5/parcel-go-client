import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./Routing/Routing.jsx";
import { AuthProvider } from "./Provider/AuthProvider.jsx";
import { ThemeProvider } from "./components/Theme/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={Routing}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
