import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { NavLink, Outlet } from "react-router-dom";

export const Dashboard = () => {
  const [role, isLoading] = useRoleCheker();
  const userMenu = (
    <>
      <ul>
        <li>
          <NavLink>Book a Parcel</NavLink>
        </li>
      </ul>
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
  const deliveryHeroMenu = (
    <>
      <ul>
        <li>
          <NavLink>All Parcels</NavLink>
        </li>
        <li>
          {" "}
          <NavLink>All Users</NavLink>
        </li>
        <li>
          <NavLink>All Delivery</NavLink>
        </li>
        <li>
          {" "}
          <NavLink>Statistics</NavLink>
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
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      )}
    </div>
  );
};
