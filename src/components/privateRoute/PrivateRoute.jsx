import { useAuth } from "@/Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { RingSpinner } from "../Loading/RingSpinner";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <RingSpinner />;
  }

  if (!loading && user) {
    return children;
  }

  return <Navigate state={pathname} to="/login" />;
};
