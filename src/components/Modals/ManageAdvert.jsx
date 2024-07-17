import "./third.css";
import { Link } from "react-router-dom";
import { useModal } from "../../Hooks/useModal";

import ManageAdCard from "./ManageAdCard";
import AdPolicy from "./AdPolicy";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
import ModalButton from "./ModalButton";
import empty from "../../assets/profile_images/manageBusinessEmpty.png";
import ModalContainer from "./ModalContainer";
import { useOpenModal } from "Hooks/useOpenModal";

const ManageAdvert = ({ onModalClose }) => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();

  const adData = [9];

  return (
    <ModalWrapper>
      <ModalHeader header="Manage Adverts" onModalClose={onModalClose} />

      <div className="manage_container">
        {!adData.length ? (
          <div className="manage_container_empty_state">
            <div>
              <img src={empty} alt="" />

              <div className="message">No advert yet!</div>
            </div>

            <div>
              <Link to="/">Read our Ad Policy</Link>

              <ModalButton>Post an Advert</ModalButton>
            </div>
          </div>
        ) : (
          <div className="manage_container_with_data">
            <div className="manage_container_adverts">
              <ManageAdCard />
            </div>

            <div
              className="imei_serial_addition clickModalOpen"
              id="btn"
              data-modal="policy"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.75 11.25V6H11.25V11.25H6V12.75H11.25V18H12.75V12.75H18V11.25H12.75Z"
                  fill="white"
                />
              </svg>
            </div>

            {modal.policy && (
              <ModalContainer type="policy">
                <AdPolicy />
              </ModalContainer>
            )}
          </div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default ManageAdvert;
