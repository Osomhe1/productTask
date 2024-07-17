import { useQuery } from "@tanstack/react-query";
import { getGadgets } from "services/profile_business_API";

export const useGetGadgets = () => {
  const { status: gadgetStatus, refetch: gadgetRefetch, data: gadgets } = useQuery({
    queryKey: ["gadgets"],
    queryFn: getGadgets,
  });

  return { gadgetStatus, gadgets, gadgetRefetch };
};
