import { useQuery } from "@tanstack/react-query";
import { getAllMovies} from "api/services/tv";

export const useGetAllMovies = () => {
  const {
    isLoading: isAllMoviesLoading,
    data: allMovies,
    status: allMoviesStatus,
    error: allMoviesError,
    refetch: allMoviesRefetch
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
    keepPreviousData: false,
  });

  return {
    isAllMoviesLoading,
    allMovies,
    allMoviesStatus,
    allMoviesError,
    allMoviesRefetch
  };
};
