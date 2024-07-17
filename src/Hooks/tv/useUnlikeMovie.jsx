import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unlikeMovieFn } from "api/services/tv";

const useUnlikeMovie = (id) => {
  const queryClient = useQueryClient();

  const { status: unlikeStatus, mutate: unlikeMutate } = useMutation({
    mutationFn: () => unlikeMovieFn(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies", "liked"],
      });
    },

  });

  return { unlikeStatus, unlikeMutate };
};

export default useUnlikeMovie