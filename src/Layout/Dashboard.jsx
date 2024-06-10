import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { useAuth } from "@/Hooks/useAuth";

import logo from "../assets/image/update image/logo2.png";
import { ProfileDropDown } from "@/components/ProfileDropDown/ProfileDropDown";
import { ToogleTheme } from "@/components/Theme/ToogleTheme";

export const Dashboard = () => {
  const [role, isLoading] = useRoleCheker();
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const userMenu = (
    <>
      <ul>
        <li>
          <NavLink to="/dashboard/bookparcel">Book a Parcel</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/myparcel">My Parcel</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/myprofile">My Profile</NavLink>
        </li>
      </ul>
    </>
  );
  const adminMenu = (
    <>
      <ul>
        <li>
          <NavLink to="/dashboard/allparcel">All Parcels</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/alluser">All Users</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/alldelivery">All Delivery</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/statistics">Statistics</NavLink>
        </li>
      </ul>
    </>
  );
  const deliveryHeroMenu = (
    <>
      <ul>
        <li>
          <NavLink to="/dashboard/mydelivery">My Delivery List</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reviews">My Reviews</NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div>
      {isLoading ? (
        "Loading......"
      ) : (
        <>
          {" "}
          <div className="sticky top-0 z-50">
            <div className="flex justify-between bg-accent  backdrop-blur-xl py-[9px]  ">
              {/* left side  */}
              <div className="flex   items-center ">
                <Link
                  to="/"
                  className="flex rounded-md pr-2 hover:bg-accent font-bold text-lg  items-center "
                >
                  <img className="w-10 h-10" src={logo} alt="logo" />
                  ParcelGo
                </Link>
              </div>
              {/* end side */}
              <div className="flex  gap-2 items-center">
                <ToogleTheme />
                <ProfileDropDown user={user} />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[20%] bg-accent min-h-screen shadow-2xl">
              {role === "user"
                ? userMenu
                : role === "deliveryHero"
                ? deliveryHeroMenu
                : adminMenu}
            </div>
            <div className="overflow-hidden flex-grow w-full">
              <Outlet></Outlet>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
