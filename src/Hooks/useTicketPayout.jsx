import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPayoutHistory, getWithdrawal } from "api/services/ticket";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useProfileModal from "./profile/useProfileModal";

const useTicketPayout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { openSuccessModal } = useProfileModal();

  const {
    isLoading: isWithdrawalLoading,
    error: withdrawalError,
    mutate: withdrawalMutate,
    status: withdrawalStatus,
  } = useMutation({
    mutationFn: (formData) => getWithdrawal(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["overview", "payout-history"],
      });
      openSuccessModal();
    },
  });

  const {
    isLoading: isPayoutHistoryLoading,
    error: payoutHistoryError,
    data: payoutHistory,
    refetch: refetchPayoutHistory,
    isFetching: isPayoutHistoryRefetching,
  } = useQuery({
    queryKey: ["payout-history"],
    queryFn: () => getPayoutHistory(),
  });

  return {
    isWithdrawalLoading,
    withdrawalError,
    withdrawalMutate,
    withdrawalStatus,
    payoutHistory,
    payoutHistoryError,
    isPayoutHistoryLoading,
    isPayoutHistoryRefetching,
    refetchPayoutHistory,
  };
};

export default useTicketPayout;
