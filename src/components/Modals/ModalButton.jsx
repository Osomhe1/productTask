const ModalButton = ({ children, onClick, type }) => {
  return (
    <button
      className="modal_btn clickModalOpen"
      onClick={onClick}
      data-modal={type}
    >
      {children}
    </button>
  );
};

export default ModalButton;
