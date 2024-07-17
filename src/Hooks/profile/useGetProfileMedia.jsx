import { useQuery } from '@tanstack/react-query';
import { getMedia } from 'api/services/profile';

const useGetProfileMedia = () => {
    const {
        isLoading: isMediaDataLoading,
        data: mediaData,
        status: mediaStatus,
        error: mediaDataError,
        refetch: refetchMediaData,
        isFetching: isMediaDataFetching
      } = useQuery({
        queryKey: ["profile-media"],
        queryFn: getMedia,
      });

    
  return {isMediaDataLoading, mediaData, mediaDataError, mediaStatus, refetchMediaData, isMediaDataFetching}
}

export default useGetProfileMedia