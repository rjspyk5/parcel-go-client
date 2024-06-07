import { useAxiosSequre } from "./useAxiosSequre";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const axiosSequre = useAxiosSequre();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const result = await axiosSequre.get("/user");
      return result.data;
    },
  });
  return [data, isLoading, refetch];
};
