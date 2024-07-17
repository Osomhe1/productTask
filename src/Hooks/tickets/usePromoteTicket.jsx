import { useMutation } from "@tanstack/react-query";
import { promoteTicket } from "api/services/ticket";
import { queryClient } from "providers/QueryProvider";

import toast from "react-hot-toast";

const usePromoteTicket = (id) => {
  const {
    isLoading: isPromoteTicketLoading,
    status: promoteTicketStatus,
    mutate: promotingTicket,
  } = useMutation({
    mutationFn: (data) => promoteTicket(data, id),

    onSuccess: () => {
      toast.success("Ticket promoted");
    },
    onError: () => {},
  });

  return { isPromoteTicketLoading, promoteTicketStatus, promotingTicket };
};

export default usePromoteTicket;
