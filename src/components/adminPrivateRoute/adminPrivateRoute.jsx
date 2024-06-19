import { useAuth } from "@/Hooks/useAuth";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { Navigate } from "react-router-dom";

export const AdminPrivateRoute = ({ children }) => {
  const [role, isLoading] = useRoleCheker();
  const { user, loading } = useAuth();

  if (loading || isLoading) {
    return "Loading...........";
  }

  if (user && role == "admin") {
    return children;
  }

  return <Navigate to="/login" />;
};
