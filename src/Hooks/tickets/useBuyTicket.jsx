import { useMutation } from "@tanstack/react-query";
import { purchaseTicket } from "api/services/ticket";

const useBuyTicket = (id) => {
  const {
    isLoading: isBuyingLoading,
    status: buyingStatus,
    mutate: buyingMutate,
  } = useMutation({
    mutationFn: (formData) => purchaseTicket(formData, id),
    onSuccess: (data) => {
      if (data) {
        window.location.href = data?.data?.paystack?.authorization_url;
      }
    },
  });

  return {
    isBuyingLoading,
    buyingStatus,
    buyingMutate,
  };
};

export default useBuyTicket;
