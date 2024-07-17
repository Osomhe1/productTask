import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "api/services/profile";

export const useGetAllAccounts = () => {
  const {
    isLoading: isAllAccountsLoading,
    status: allAccountsStatus,
    data: allAccounts,
    error: allAccountsError,
  } = useQuery({
    queryKey: ["allAccounts"],
    queryFn: getAccounts,
    /* refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    keepPreviousData: false, */
  });


  return { isAllAccountsLoading, allAccounts, allAccountsError, allAccountsStatus };

};
