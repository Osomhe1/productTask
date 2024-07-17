import { useQuery } from "@tanstack/react-query";
import { getPublicProfileData } from "api/services/profile";

export const useGetPublicProfile = (id) => {
  const {
    isLoading: isProfileDataLoading,
    data: profileData,
    status: profileDataStatus,
    error: profileDataError,
    refetch: refetchProfile,
    isFetching: isProfileFetching,
  } = useQuery({
    queryKey: ["public-profile", id],
    queryFn: () => getPublicProfileData(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
    keepPreviousData: false,
  });

  return {
    isProfileDataLoading,

    profileData,

    profileDataStatus,

    profileDataError,

    refetchProfile,

    isProfileFetching,
  };
};
