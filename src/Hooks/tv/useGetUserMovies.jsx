import { useQuery } from "@tanstack/react-query";
import { getUserMoviesFn } from "api/services/tv";

export const useGetUserMovies = (id) => {
  const {
    isLoading: isUserMoviesLoading,
    data: userMovies,
    status: userMoviesStatus,
    error: userMoviesError,
  } = useQuery({
    queryKey: ["userMovies", id],
    queryFn: () => getUserMoviesFn(id),
    refetchOnWindowFocus: false,
    refetchOnMount: true, 
    refetchOnReconnect: false,
  });

  return {
    isUserMoviesLoading,
    userMovies,
    userMoviesStatus,
    userMoviesError,
  };
};
