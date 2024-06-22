import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
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
import { useEffect } from "react";
import { RingSpinner } from "@/components/Loading/RingSpinner";

export const Dashboard = () => {
  const [role, isLoading] = useRoleCheker();
  const navigate = useNavigate();

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
      navigate(defaultRoute());
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <FaPeopleCarry />{" "}
            <span className="hidden lg:block ">Book Parcel</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myparcel"
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <FaBoxOpen /> <span className="hidden lg:block ">My Parcel </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myprofile"
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <FaUser />
            <span className="hidden lg:block ">My Profile</span>
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <IoBarChart />
            <span className="hidden lg:block "> Statistics </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/allparcel"
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <FaBoxOpen />
            <span className="hidden lg:block ">All Parcels </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/alluser"
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <FaUsers />
            <span className="hidden lg:block ">All Users </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/alldelivery"
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <IoMdBicycle />
            <span className="hidden lg:block ">All Delivery Men</span>
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <FaPeopleCarry />{" "}
            <span className="hidden lg:block ">My Delivery List</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/reviews"
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2 h-9 transition-all duration-300 flex items-center font-bold shadow-sm bg-[#f15a25] text-white"
                : "hover:bg-[#f15b2558] space-x-2 transition-all duration-300 flex items-center font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <MdRateReview />
            <span className="hidden lg:block ">My Reviews </span>
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div>
      {isLoading ? (
        <RingSpinner />
      ) : (
        <>
          <div className="sticky border shadow-lg top-0 z-50">
            <div className="flex justify-between bg-accent backdrop-blur-xl py-[9px]">
              {/* left side */}
              <div className="flex items-center">
                <Link
                  to="/dashboard"
                  className="flex rounded-md pr-2 hover:bg-accent font-bold md:text-lg text-base items-center"
                >
                  <img className="w-10 h-10" src={logo} alt="logo" />
                  Dashboard
                </Link>
              </div>
              {/* end side */}
              <div className="flex gap-2 items-center">
                <ToogleTheme />
                <ProfileDropDown />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="fixed top-14 left-0 w-[20%] h-full border bg-accent shadow-2xl">
              {role?.role === "user"
                ? userMenu
                : role?.role === "deliveryHero"
                ? deliveryHeroMenu
                : adminMenu}
            </div>
            <div className="flex-grow ml-[20%] overflow-hidden">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
