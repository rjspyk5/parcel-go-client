import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Button>Click</Button>
      <Outlet />
    </div>
  );
};
