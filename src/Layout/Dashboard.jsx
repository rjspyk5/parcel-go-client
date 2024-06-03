import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { NavLink, Outlet } from "react-router-dom";

export const Dashboard = () => {
  const [role, isLoading] = useRoleCheker();
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
        <div className="flex">
          <div className="w-[20%] min-h-screen bg-gray-500">
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
      )}
    </div>
  );
};
