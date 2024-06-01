import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ProfileDropDown } from "../ProfileDropDown/ProfileDropDown";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/Hooks/useAuth";

import { ToogleTheme } from "../Theme/ToogleTheme";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const menu = (
    <>
      <NavLink
        to="/"
        className={({ isAcitve }) =>
          isAcitve ? "bg-yellow-500 dark:bg-yellow-300" : "bg-red-500"
        }
      >
        <Button variant="link">Home</Button>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isAcitve }) =>
          isAcitve ? "bg-yellow-500 dark:bg-yellow-300" : ""
        }
      >
        <Button variant="link">Dashboard</Button>
      </NavLink>
    </>
  );
  const mobileItems = ["Home", "Dashboard", "C"];
  return (
    <div>
      <div className="flex shadow-md py-4 justify-between border-b">
        {/* left side  */}
        <div className="flex gap-3 items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <div className="flex flex-col items-start">{menu}</div>
            </SheetContent>
          </Sheet>
          <h1>Logo</h1>
        </div>
        {/* Middle side */}
        <div className="mr-4 hidden gap-2 md:flex">{menu}</div>

        {/* end side */}
        <div className="flex gap-2">
          <ToogleTheme />
          {user ? (
            <ProfileDropDown user={user} />
          ) : (
            <NavLink to="/login">
              <Button>Sign In</Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
