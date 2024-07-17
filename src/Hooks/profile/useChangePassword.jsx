import { useMutation } from "@tanstack/react-query";
import { changePassword } from "api/services/profile";

export const useChangePassword = () => {
  const { status: changingStatus, isLoading: isUpdatingPassword, mutate: updatePassword } = useMutation({
    mutationFn: changePassword,
  });

  return { changingStatus, updatePassword, isUpdatingPassword };
};
