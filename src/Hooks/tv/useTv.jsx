import { useQuery } from "@tanstack/react-query";
import { getTvChannel} from "api/services/tv";

export const useTv = () => {
  const {
    isLoading: isUserTvDataLoading,
    data: userTvData,
    status: userTvDataStatus,
    error: userTvDataError,
    refetch: userTvDataRefetch
  } = useQuery({
    queryKey: ["usertv"],
    queryFn: getTvChannel,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
    keepPreviousData: false,
  });

  return {
    isUserTvDataLoading,
    userTvData,
    userTvDataStatus,
    userTvDataError,
    userTvDataRefetch
  };
};
