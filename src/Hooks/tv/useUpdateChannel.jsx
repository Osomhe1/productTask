import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTvChannel} from "api/services/tv";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useUpdateChannel = (id) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading: isUpdateChannelLoading,
    status: updateChannelStatus,
    mutate: updateChannel,
  } = useMutation({
    mutationFn: (formData) => updateTvChannel(formData, id),

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user-tv"],
      });

      navigate("/tv");
      toast.success("Channel updated");
    },
  });

  return {
    updateChannelStatus,
    updateChannel,
    isUpdateChannelLoading,
  };
};

export default useUpdateChannel;
