import { useQuery } from "@tanstack/react-query";
import { getCurrentActiveBusiness } from "services/profile_business_API";

export const useCurrentBusinessLists = () => {
  const { status: businessesStatus, data: businesses } = useQuery({
    queryKey: ["business"],
    queryFn: getCurrentActiveBusiness,
  });

  return { businessesStatus, businesses };
};
