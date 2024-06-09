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
            ? "border px-2  h-7 font-bold rounded-md shadow-sm  bg-orange-500  text-white"
            : "hover:bg-yellow-300 hover:text-black font-bold h-7 px-2  rounded-md"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "border px-2 border-yellow-400  h-7 font-bold rounded-md shadow-sm  bg-yellow-300  text-black"
            : "hover:bg-yellow-300 hover:text-black h-7 font-bold px-2 rounded-md "
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0">
      <div className="flex backdrop-blur-xl shadow-md py-[10px]  justify-between  border-b">
        {/* left side  */}
        <div className="flex gap-3 items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <div className="flex flex-col items-start ">{menu}</div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center ">
            <img className="w-10 h-10" src={logo} alt="logo" />
            <Link to="/" className="font-bold text-lg ">
              ParcelGo
            </Link>
          </div>
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
              <Button>Sign In</Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
