import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMovieFn} from "api/services/tv";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCreateMovie = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading: isCreateMovieLoading,
    status: createMovieStatus,
    mutate: createMovie,
    error: createMovieError
  } = useMutation({
    mutationFn: (formData) => createMovieFn(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({predicate: (query) => {return ['movies','usertv'].includes(query.queryKey[0]);}})
      navigate("/tv");
      toast.success("Movie created");
    },
  });

  return {
    createMovie,
    isCreateMovieLoading,
    createMovieStatus,
    createMovieError
  };
};

export default useCreateMovie;
