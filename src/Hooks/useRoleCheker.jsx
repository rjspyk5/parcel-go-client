import { useQuery } from "@tanstack/react-query";
import { useAxiosSequre } from "./useAxiosSequre";
import { useAuth } from "./useAuth";

export const useRoleCheker = () => {
  const axiosSequre = useAxiosSequre();
  const { user } = useAuth();
  const { data: userRole, isLoading } = useQuery({
    queryKey: ["userCheaker"],
    queryFn: async () => {
      const result = await axiosSequre.get(`/user/${user?.email}`);
      return result.data?.role;
    },
  });
  return [userRole, isLoading];
};
