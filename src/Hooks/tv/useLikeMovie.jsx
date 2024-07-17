import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likeMovieFn} from "api/services/tv";
import toast from "react-hot-toast";

const useLikeMovie = () => {
  const queryClient = useQueryClient();

  const { status: likeStatus, mutate: likeMutate } = useMutation({
    mutationFn: (formData) => likeMovieFn(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies", "liked"],
      });
    }
  });
  return { likeStatus, likeMutate };
};


export default useLikeMovie;
