import { useQuery } from "@tanstack/react-query";
import { useAxiosSequre } from "./useAxiosSequre";
import { useAuth } from "./useAuth";

export const useRoleCheker = () => {
  const axiosSequre = useAxiosSequre();
  const { user, loading } = useAuth();
  const {
    data: userRole,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userCheaker"],
    enabled: !loading,
    queryFn: async () => {
      const result = await axiosSequre.get(`/user/${user?.email}`);

      return result.data;
    },
  });
  return [userRole, isLoading, refetch];
};
