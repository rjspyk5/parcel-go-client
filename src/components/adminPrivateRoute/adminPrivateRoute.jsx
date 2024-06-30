import { useAuth } from "@/Hooks/useAuth";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { Navigate, useLocation } from "react-router-dom";

import { FullRingSpinner } from "../Loading/FullRingSpinner";

export const AdminPrivateRoute = ({ children }) => {
  const [role, isLoading] = useRoleCheker();
  const { user, loading } = useAuth();

  if (loading || isLoading) {
    return <FullRingSpinner />;
  }

  if (user && role.role == "admin") {
    return children;
  }

  return <Navigate to="/login" />;
};
