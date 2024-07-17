import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModal } from "Hooks/useModal";
import toast from "react-hot-toast";
import { verifyUser } from "api/services/profile";
import { useNavigate } from "react-router-dom";
import useProfileModal from "./useProfileModal";

export const useVerifyUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { openSuccessModal } = useProfileModal();

  const {
    status: verifyStatus,
    mutate: verifying,
    isLoading: isVerifying,
  } = useMutation({
    mutationFn: verifyUser,

    onSuccess: () => {
      /* if (response.status) {
        queryClient.invalidateQueries({
          queryKey: ["verify"],
        });
 */
      // toast.success("Verification sent");
      openSuccessModal();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return { verifyStatus, verifying, isVerifying };
};
