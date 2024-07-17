import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent, purchaseTicket, updateEvent } from "api/services/ticket";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetEventDetails from "./useGetEventDetails";
import useProfileModal from "./profile/useProfileModal";

const useCreateUpdateEvent = (id) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    handleCreateTicketClose,
    handleEditTicketClose,
    handleSetNewTicketID,
  } = useGetEventDetails();

  const { openSuccessModal } = useProfileModal();

  const {
    isLoading: isCreateTicketLoading,
    status: createTicketStatus,
    mutate: createTicket,
  } = useMutation({
    mutationFn: (formData) => createEvent(formData),

    onSuccess: (data) => {
      if (data?.data?.id) {
        const newID = data?.data?.id;
        handleSetNewTicketID(newID);
      }
      queryClient.invalidateQueries({
        queryKey: ["allTicket", "events"],
      });

      handleCreateTicketClose();
      openSuccessModal();
      toast.success("Ticket created");
    },
  });

  const {
    isLoading: isUpdateTicketLoading,
    status: updateTicketStatus,
    mutate: updateTicket,
  } = useMutation({
    mutationFn: (formData) => updateEvent(formData, id),

    onSuccess: (data) => {
      if (data?.data?.data?.id) {
        const newID = data?.data?.data?.id;
        handleSetNewTicketID(newID);
      }
      queryClient.invalidateQueries({
        queryKey: ["allTicket", "events"],
      });

      handleEditTicketClose();
      openSuccessModal();
      toast.success("Ticket updated");
    },
  });

  return {
    createTicket,
    isCreateTicketLoading,
    createTicketStatus,
    updateTicketStatus,
    updateTicket,
    isUpdateTicketLoading,
  };
};

export default useCreateUpdateEvent;
