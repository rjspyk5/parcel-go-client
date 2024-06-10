import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ProfileDropDown } from "../ProfileDropDown/ProfileDropDown";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/Hooks/useAuth";
import { ToogleTheme } from "../Theme/ToogleTheme";
import logo from "../../assets/image/logo.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const menu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "border px-2 h-9 transition-all duration-300 flex items-center font-bold md:rounded-md shadow-sm  bg-[#f15a25]  text-white"
            : "hover:bg-accent hover:underline underline-offset-2 transition-all duration-300  flex items-center  font-bold h-9 px-2  md:rounded-md"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "border px-2 h-9 transition-all duration-300 flex items-center font-bold md:rounded-md shadow-sm  bg-[#f15a25]  text-white"
            : "hover:bg-accent hover:underline underline-offset-2 transition-all duration-300  flex items-center  font-bold h-9 px-2  md:rounded-md"
        }
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className="flex backdrop-blur-xl shadow-md py-3 justify-between  border-b">
        {/* left side  */}
        <div className="flex  items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0" side="left">
              <div className="flex flex-col mt-12 *:w-full  ">{menu}</div>
            </SheetContent>
          </Sheet>
          <Link
            to="/"
            className="flex rounded-md pr-2 hover:bg-accent font-bold text-lg  items-center "
          >
            <img className="w-10 h-10" src={logo} alt="logo" />
            ParcelGo
          </Link>
        </div>
        {/* Middle side */}
        <div className="mr-4 hidden gap-2 md:flex md:items-center">{menu}</div>
        {/* end side */}
        <div className="flex gap-2 items-center">
          <ToogleTheme />
          {user ? (
            <ProfileDropDown user={user} />
          ) : (
            <NavLink to="/login">
              <Button className="bg-[#f15a25] dark:text-white transion-all hover:bg-[#f1254e] duration-200  hover:shadow-lg">
                Sign In
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
