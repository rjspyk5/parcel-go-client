import { useAuth } from "@/Hooks/useAuth";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { NavLink, useNavigate } from "react-router-dom";
export const ProfileDropDown = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => navigate("/login"));
  };
  const [userRole] = useRoleCheker();
  console.log(userRole);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage className="w-9 h-9 rounded-full" src={userRole?.image} />
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {userRole ? userRole.name : "Anonymous"}
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
