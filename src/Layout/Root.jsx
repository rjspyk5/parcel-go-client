import { Footer } from "@/Pages/Shared/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="bodyFont">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
