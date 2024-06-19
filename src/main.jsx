import React from "react";
import ReactDOM from "react-dom/client";
import "@smastrom/react-rating/style.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./Routing/Routing.jsx";
import { AuthProvider } from "./Provider/AuthProvider.jsx";
import { ThemeProvider } from "./components/Theme/ThemeProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
          <RouterProvider router={Routing}></RouterProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
