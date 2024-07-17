import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTvChannel } from "api/services/tv";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useCreateChannel = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading: isCreateChannelLoading,
    status: createChannelStatus,
    mutate: createChannel,
    error: createChannelError
  } = useMutation({
    mutationFn: (formData) => createTvChannel(formData),

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user-tv"],
      });

      navigate("/tv");
      toast.success("Channel created");
    },
  });

  return {
    createChannel,
    isCreateChannelLoading,
    createChannelStatus,
    createChannelError
  };
};

export default useCreateChannel;
