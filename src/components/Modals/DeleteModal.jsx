const DeleteModal = ({ handleDeleteModalClose }) => {
  return (
    <div className="delete-modal">
      <div className="dele-ead">Delete product?</div>
      <div className="del-info">
        This product will be deleted from your store
      </div>
      <div className="back-or-del">
        <div className="back-o" onClick={handleDeleteModalClose}>
          Go back
        </div>
        <div className="del-conf">Delete</div>
      </div>
    </div>
  );
};

export default DeleteModal;
