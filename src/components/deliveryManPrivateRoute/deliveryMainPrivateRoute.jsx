import { useAuth } from "@/Hooks/useAuth";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { Navigate } from "react-router-dom";
import { RingSpinner } from "../Loading/RingSpinner";
export const DeliveryMainPrivateRoute = ({ children }) => {
  const [role, isLoading] = useRoleCheker();
  const { user, loading } = useAuth();
  if (loading || isLoading) {
    return <RingSpinner />;
  }
  if (user && role.role === "deliveryHero") {
    return children;
  }
  return <Navigate to="/login" />;
};
