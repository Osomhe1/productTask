import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateGadget as updateGadgetAPI } from "api/services/profile";
import { useModal } from "Hooks/useModal";

export const useUpdateGadget = () => {
  const { setModal } = useModal();
  const queryClient = useQueryClient();

  const { status: gadgetStatus, mutate: updateGadget } = useMutation({
    mutationFn: updateGadgetAPI,

    onSuccess: (response) => {
      if (response.status) {
        setModal({});

        queryClient.invalidateQueries({
          queryKey: ["gadgets"],
        });

        toast.success("Gadget updated successfully");
      }
    },
  });

  return { gadgetStatus, updateGadget };
};
