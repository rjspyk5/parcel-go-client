import { Footer } from "@/Pages/Shared/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};
