/**
 * -------------------------
 * This function is meant for modals handle (it opens corresponding modal by targeting their DOM dataset attribute)
 * -------------------------
 */
import { useModal } from "./useModal";

export const useOpenModal = () => {
  const { setModal } = useModal();

  const handleClick = (e) => {
    const targetEl = e.target.closest(".clickModalOpen");

    const modal = targetEl.dataset.modal;

    setModal((prev) => ({
      ...prev,
      [modal]: true,
    }));
  };

  return { handleClick };
};
