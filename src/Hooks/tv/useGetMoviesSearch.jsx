import { useQuery } from "@tanstack/react-query";
import { getAllMoviesSearch} from "api/services/tv";

export const useGetMoviesSearch = (searchQuery) => {
  const {
    isLoading: isMoviesLoading,
    data: movies,
    status: moviesStatus,
    error: moviesError,
  } = useQuery({
    queryKey: ["movies", searchQuery],
    queryFn: getAllMoviesSearch(searchQuery),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
    keepPreviousData: false,
    //enabled: !!searchQuery
  });

  return {
    isMoviesLoading,
    movies,
    moviesStatus,
    moviesError,
  };
};
