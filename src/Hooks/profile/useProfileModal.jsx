
import { useTicketStore } from '../../zustand/store'

const useProfileModal = () => {
    const openSuccessModal = useTicketStore((state) => state.openSuccessModal);
    const closeSuccessModal = useTicketStore((state) => state.closeSuccessModal);
    const isSuccessModal = useTicketStore((state) => state.isSuccessModal);

  return {openSuccessModal, closeSuccessModal, isSuccessModal}
}

export default useProfileModal