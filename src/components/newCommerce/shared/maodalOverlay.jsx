import { useContext } from "react";
import { ModalContext } from "Context/ModalContext";
const Overlay = () => {
  const { isOpen, closeModal } = useContext(ModalContext);
  return (
    <>
      <div
        onClick={() => {
          closeModal();
        }}
        className={`overlay fixed inset-0 w-full h-[100vh] z-[992] ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ background: "rgba(0, 0, 0, 0.2)" }}
      ></div>
    </>
  );
};

export default Overlay;

export const Sidebaroverlay = () => {
  const { slide, slideFalse } = useContext(ModalContext);
  return (
    <>
      <div
        onClick={() => {
          slideFalse();
        }}
        className={`overlay fixed inset-0 w-full h-[100vh] z-[992] ${
          slide ? "block" : "hidden"
        }`}
        style={{ background: "rgba(0, 0, 0, 0.2)" }}
      ></div>
    </>
  );
};
