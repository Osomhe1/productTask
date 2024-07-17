import { useModal } from "Hooks/useModal";
import empty from "../../assets/profile_images/manageBusinessEmpty.png";
import ModalContainer from "components/Modals/ModalContainer";
import EditBusinessProfile from "components/BusinessProfileComponents/EditBusinessProfile";
import { useOpenModal } from "Hooks/useOpenModal";

const ManageBusinessEmpty = () => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();

  return (
    <>
      <div className="empty_business">
        <img src={empty} alt="Empty" />

        <p>No business yet!</p>

        <button
          onClick={handleClick}
          data-modal="setting"
          className="clickModalOpen"
        >
          + Create a Business acccount now
        </button>
      </div>

      {modal.setting && (
        <ModalContainer type="setting">
          <EditBusinessProfile />
        </ModalContainer>
      )}
    </>
  );
};

export default ManageBusinessEmpty;
