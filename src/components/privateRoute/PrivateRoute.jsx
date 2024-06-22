import { useAuth } from "@/Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { RingSpinner } from "../Loading/RingSpinner";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <RingSpinner />;
  }

  if (!loading && user) {
    return children;
  }

  return <Navigate to="/login" />;
};
