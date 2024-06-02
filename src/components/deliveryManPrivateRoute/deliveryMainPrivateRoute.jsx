import { useAuth } from "@/Hooks/useAuth";
import { useRoleCheker } from "@/Hooks/useRoleCheker";
import { Navigate } from "react-router-dom";
export const DeliveryMainPrivateRoute = ({ children }) => {
  const [role, isLoading] = useRoleCheker();
  const { user, loading } = useAuth();
  if (loading || isLoading) {
    return "Loading...........";
  }
  if (user && role === "deliveryHero") {
    return children;
  }
  return <Navigate to="/login" />;
};
