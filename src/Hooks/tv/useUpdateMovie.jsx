import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMovieFn} from "api/services/tv";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useUpdateMovie = (id) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading: isUpdateMovieLoading,
    status: updateMovieStatus,
    mutate: updateMovie,
    error: updateMovieError
  } = useMutation({
    mutationFn: (formData) => updateMovieFn(formData, id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies"],
      });

      navigate("/tv");
      toast.success("Movie updated");
    },
  });

  return {
    updateMovie,
    isUpdateMovieLoading,
    updateMovieStatus,
    updateMovieError
  };
};

export default useUpdateMovie;
