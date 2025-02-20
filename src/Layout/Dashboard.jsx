import { useRoleCheker } from "@/Hooks/useRoleCheker";
import {
  NavLink,
  Outlet,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import logo from "../assets/image/logo.png";
import { ProfileDropDown } from "@/components/ProfileDropDown/ProfileDropDown";
import { ToogleTheme } from "@/components/Theme/ToogleTheme";
import { FaPeopleCarry } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { useEffect, useState } from "react";
import { RingSpinner } from "@/components/Loading/RingSpinner";
import { FullRingSpinner } from "@/components/Loading/FullRingSpinner";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "react-day-picker";

export const Dashboard = () => {
  const [role, isLoading] = useRoleCheker();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const defaultRoute = () => {
    if (role?.role === "admin") {
      return "/dashboard/statistics";
    } else if (role?.role === "deliveryHero") {
      return "/dashboard/mydelivery";
    } else {
      return "/dashboard/bookparcel";
    }
  };

  useEffect(() => {
    if (!isLoading && role) {
      if (pathname === "/dashboard") {
        navigate(defaultRoute(), { replace: true });
      }
    }
  }, [isLoading, role]);

  const userMenu = (
    <>
      <ul className="">
        <li className=" ">
          <NavLink
            to="/dashboard/bookparcel"
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <FaPeopleCarry /> Book Parcel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myparcel"
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <FaBoxOpen /> My Parcel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myprofile"
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <FaUser /> My Profile
          </NavLink>
        </li>
        <hr />
      </ul>
    </>
  );

  const adminMenu = (
    <>
      <ul>
        <li>
          <NavLink
            to="/dashboard/statistics"
            end
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <IoBarChart /> Statistics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/allparcel"
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <FaBoxOpen /> All Parcels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/alluser"
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <FaUsers /> All Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/alldelivery"
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <IoMdBicycle /> All Delivery Men
          </NavLink>
        </li>
      </ul>
    </>
  );

  const deliveryHeroMenu = (
    <>
      <ul>
        <li>
          <NavLink
            to="/dashboard/mydelivery"
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <FaPeopleCarry /> My Delivery List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/reviews"
            className={({ isActive }) =>
              isActive
                ? "border lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 lg:px-4"
            }
          >
            <MdRateReview /> My Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div>
      {isLoading ? (
        <FullRingSpinner />
      ) : (
        <>
          <div className="sticky border shadow-lg top-0 z-50">
            <div className="flex justify-between pr-[2%] md:pr-[2%] bg-accent backdrop-blur-xl py-[9px]">
              {/* left side */}
              <div className="flex items-center">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <HamburgerMenuIcon className="md:hidden" />
                  </SheetTrigger>
                  <SheetContent className="p-0" side="left">
                    <div className="flex flex-col mt-12 *:w-full px-4">
                      {role?.role === "user"
                        ? userMenu
                        : role?.role === "deliveryHero"
                        ? deliveryHeroMenu
                        : adminMenu}
                    </div>
                  </SheetContent>
                </Sheet>
                <Link
                  to={defaultRoute()}
                  className="flex rounded-md pr-2 hover:bg-accent font-bold md:text-lg text-base items-center"
                >
                  <img className="w-10 h-10" src={logo} alt="logo" />
                  Dashboard
                </Link>
              </div>
              <Link
                className="rounded-md bg-[#e3ebf4] dark:bg-slate-900 duration-300 hover:text-white hover:bg-orange-500 dark:hover:bg-orange-500 font-bold flex items-center px-2 py-1 bg-accent"
                to="/"
              >
                Home
              </Link>

              {/* end side */}
              <div className="flex gap-2 items-center">
                <ToogleTheme />
                <ProfileDropDown />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="fixed top-14 left-0 hidden md:block  w-[20%] h-full border bg-accent shadow-2xl">
              {role?.role === "user"
                ? userMenu
                : role?.role === "deliveryHero"
                ? deliveryHeroMenu
                : adminMenu}
            </div>

            <div className="flex-grow md:ml-[20%] min-h-screen overflow-hidden">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
