import { useQuery } from "@tanstack/react-query";
import { getLiked } from "api/services/tv";

export const useGetLikedMovies = () => {
  const {
    isLoading: isLikedMoviesLoading,
    data: likedMovies,
    status: likedMoviesStatus,
    error: likedMoviesError,
  } = useQuery({
    queryKey: ["liked"],
    queryFn: () => getLiked(),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  });

  return {
    isLikedMoviesLoading,
    likedMovies,
    likedMoviesStatus,
    likedMoviesError,
  };
};
