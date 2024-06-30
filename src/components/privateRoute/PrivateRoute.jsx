import { useAuth } from "@/Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { FullRingSpinner } from "../Loading/FullRingSpinner";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <FullRingSpinner />;
  }

  if (!loading && user) {
    return children;
  }

  return <Navigate state={pathname} to="/login" />;
};
