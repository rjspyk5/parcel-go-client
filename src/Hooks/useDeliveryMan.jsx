import { useQuery } from "@tanstack/react-query";
import { useAxiosSequre } from "./useAxiosSequre";
export const useDeliveryMan = () => {
  const axiosSequre = useAxiosSequre();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["allDeliveryMan"],
    queryFn: async () => {
      const result = await axiosSequre.get("/user/hero");
      return result.data;
    },
  });
  return [data, isLoading, refetch];
};
