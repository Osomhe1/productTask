import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGadget as deleteGadgetAPI } from "api/services/profile"; 

export const useDeletePhone = () => {
  const queryClient = useQueryClient();

  const {
    status: gadgetStatus,
    mutate: deleteGadget,
    error: deleteGadgetError,
  } = useMutation({
    mutationFn: deleteGadgetAPI,

    onSuccess: (response) => {
      if (response.status) {
        console.log(response);

        queryClient.invalidateQueries({
          queryKey: ["gadgets"],
        });
      }
    },
  });

  return { gadgetStatus, deleteGadget, deleteGadgetError };
};
