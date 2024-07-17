import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incrementPlays} from "api/services/tv";

const useIncrementPlays = (id) => {
  const queryClient = useQueryClient();

  const { status: incrementPlaysStatus, mutate: incrementPlaysMutate } = useMutation({
    mutationFn: () => incrementPlays(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies"],
      });
    }
  });
  return { incrementPlaysStatus, incrementPlaysMutate };
};


export default useIncrementPlays;
