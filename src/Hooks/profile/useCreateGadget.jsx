import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGadget as createGadgetAPI } from "api/services/profile"; 
import toast from "react-hot-toast";
import { useModal } from "Hooks/useModal";
import { useNavigate } from "react-router-dom";
import { useProfile } from "./useProfile";

export const useCreateGadget = () => {
  const { setModal } = useModal();
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const {profileData} = useProfile()
  const username = profileData?.data?.data?.user?.username

  const { status: gadgetStatus, mutate: createGadget, error: createGadgetError } = useMutation({
    mutationFn: createGadgetAPI,

    onSuccess: (data) => {
      if (data.status) {
        setModal((modal) => ({
          ...modal,
          input: false,
        }));

        queryClient.invalidateQueries({
          queryKey: ["gadgets"],
        });

        navigate(`/${username}/gadgets`)
        toast.success("Gadget created successfully");
        
      }
    },
  });

  return { gadgetStatus, createGadget };
};
