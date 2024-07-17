import { useQuery } from "@tanstack/react-query";
import { getSingleTvChannel } from "api/services/tv";

export const useTvChannels = (id) => {
  const {
    isLoading: isChannelDataLoading,
    data: channelData,
    status: channelDataStatus,
    error: channelDataError,
  } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => getSingleTvChannel(id),
    refetchOnWindowFocus: false, 
    refetchOnMount: true,
    refetchOnReconnect: false
  });

  return {
    isChannelDataLoading,
    channelData,
    channelDataStatus,
    channelDataError,
  };
};
