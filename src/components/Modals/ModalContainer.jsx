import { cloneElement } from "react";
import { useModal } from "../../Hooks/useModal";

const ModalContainer = ({ children, type }) => {
  const { setModal } = useModal();

  const handleContainerClick = (e) => {
    if (e.target.id === "modal") {
      setModal((prev) => ({
        ...prev,
        [type]: false,
      }));
    }
  };

  const handleBackModal = () => {
    setModal((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 bottom-0 right-0 z-[200000] bg-[#4e0da33b] lg:backdrop-blur-[1px] flex justify-center items-center"
      onClick={handleContainerClick}
    >
      {cloneElement(children, {
        onModalClose: handleBackModal,
      })}
    </div>
  );
};

export default ModalContainer;
