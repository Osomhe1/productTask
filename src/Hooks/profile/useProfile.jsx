import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "api/services/profile";

export const useProfile = () => {
  const {
    isLoading: isProfileDataLoading,
    data: profileData,
    status: profileDataStatus,
    error: profileDataError,
    refetch: refetchProfile,
    isFetching: isProfileFetching,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileData,
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
