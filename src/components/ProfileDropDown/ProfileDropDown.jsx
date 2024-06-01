import { useAuth } from "@/Hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ProfileDropDown = ({ user }) => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => console.log("logout"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img className="w-10 h-9 rounded-full" src={user?.photoURL} alt="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {user ? user.displayName : "Anonymous"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Dashboard</DropdownMenuItem>
        <button onClick={handleLogOut} className="w-full">
          {" "}
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
