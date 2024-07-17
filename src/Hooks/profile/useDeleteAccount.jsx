import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteUserAccount } from "api/services/profile";

export const useDeleteAccount = () => {
  const navigate = useNavigate();

  const { status: deletingStatus, isLoading: isDeletingAccount, mutate: deleteAccount } = useMutation({
    mutationFn: deleteUserAccount,

    onSuccess: (response) => {
      if (response.status) {
        toast.success("Account deleted successfully 👋");
        localStorage.removeItem("authToken");
        localStorage.removeItem("isAuthenticated");

        return navigate("/Signup");
      }
    },

    onError: (err) => {
      console.log(err);
    },
  });

  return { deletingStatus, isDeletingAccount, deleteAccount };
};
