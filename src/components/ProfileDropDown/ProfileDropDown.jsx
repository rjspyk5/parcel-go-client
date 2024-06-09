import { useAuth } from "@/Hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileDropDown = ({ user }) => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => navigate("/login"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.photoURL} />
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {user ? user.displayName : "Anonymous"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </DropdownMenuItem>
        <button onClick={handleLogOut} className="w-full">
          {" "}
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
