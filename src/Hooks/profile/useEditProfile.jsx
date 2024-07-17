import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProfile } from "api/services/profile";
import { useNavigate } from "react-router-dom";

export const useEditProfile = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const {
    isLoading: isUpdating,
    status: updateStatus,
    mutate: updatingProfile,
  } = useMutation({
    mutationFn: (formData) => updateProfile(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });

      toast.success("Profile updated");
      navigate(-1)
    },
  });

  return { updateStatus, isUpdating, updatingProfile };
};
