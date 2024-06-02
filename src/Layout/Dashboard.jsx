import { useAuth } from "@/Hooks/useAuth";
import { NavLink, Outlet } from "react-router-dom";

export const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  const userMenu = (
    <>
      <li>
        <NavLink>Book a Parcel</NavLink>
      </li>
    </>
  );
  const adminMenu = (
    <>
      <li>
        <NavLink>All Parcels</NavLink>
        <NavLink>All Users</NavLink>
        <NavLink>All Delivery</NavLink>
        <NavLink>Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] min-h-screen bg-gray-500"></div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
