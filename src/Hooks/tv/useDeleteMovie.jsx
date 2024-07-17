import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovie } from "api/services/tv";
import { useNavigate } from "react-router-dom";

const useDeleteMovie = (id) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const { status: deleteMovieStatus, mutate: deleteMovieMutate } = useMutation({
    mutationFn: () => deleteMovie(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies"],
      });

      queryClient.invalidateQueries({predicate: (query) => {return ['movies','usertv'].includes(query.queryKey[0]);}})

      toast.success("Movie deleted");
      navigate('/tv')
    },
  });

  return { deleteMovieMutate, deleteMovieStatus };
};

export default useDeleteMovie;
