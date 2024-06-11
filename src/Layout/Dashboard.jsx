import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useAuth } from "@/Hooks/useAuth";
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
export const Dashboard = () => {
  const [role, isLoading] = useRoleCheker();
  const { user } = useAuth();
  const userMenu = (
    <>
      <ul className="">
        <li className=" ">
          <NavLink
            to="/dashboard/bookparcel"
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
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
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <IoMdBicycle />
            <span className="hidden lg:block ">All Delivery</span>
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
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <FaPeopleCarry />{" "}
            <span className="hidden lg:block ">My Delivery</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/reviews"
            className={({ isActive }) =>
              isActive
                ? "border justify-center lg:justify-normal lg:px-4 space-x-2  h-9 transition-all duration-300 flex items-center font-bold  shadow-sm  bg-[#f15a25]  text-white"
                : "hover:bg-[#f15b2558] space-x-2  transition-all duration-300  flex items-center  font-bold h-9 justify-center lg:justify-normal lg:px-4"
            }
          >
            <MdRateReview />
            <span className="hidden lg:block ">All My Reviews </span>
          </NavLink>
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
          <div className="sticky border shadow-lg top-0 z-50">
            <div className="flex justify-between bg-accent  backdrop-blur-xl py-[9px]  ">
              {/* left side  */}
              <div className="flex   items-center ">
                <Link
                  to="/dashboard"
                  className="flex rounded-md pr-2 hover:bg-accent font-bold text-lg  items-center "
                >
                  <img className="w-10 h-10" src={logo} alt="logo" />
                  Dashboard
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
            <div className="w-[20%]  border bg-accent min-h-screen shadow-2xl">
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
