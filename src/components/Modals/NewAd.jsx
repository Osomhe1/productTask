import "./third.css";

import PreviewNewAd from "./PreviewNewAd";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
import { useModal } from "../../Hooks/useModal";
import ModalContainer from "./ModalContainer";
import ModalButton from "./ModalButton";
import { MdOutlineCameraAlt } from "react-icons/md";
import { advertCategory, day, month, years } from "utils/helper";
import CustomDropdown from "./CustomDropdown";
import { useOpenModal } from "Hooks/useOpenModal";

const NewAd = ({ onModalClose }) => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();

  return (
    <ModalWrapper>
      <ModalHeader header="New Ad" onModalClose={onModalClose} />

      <div className="new_ad_container">
        {/* ALERT BOX */}
        <div className="update_info_box">
          <img src="images/brod.png" alt="" />
          <div className="message">
            Reach out to World Audience in Large Numbers while you Pay Less.
          </div>
        </div>

        <div className="ad_form">
          {/* <form action=''> */}
          <div className="advert_row">
            {/* ADVERT INFORMATION */}
            <div className="advert_col">
              <label htmlFor="">Advert information</label>

              <div className="advert_title">
                <input type="text" placeholder="Advert Titler" />
                <div className="info">
                  <span>*</span>This will not be visible to others
                </div>
              </div>

              <div className="advert_category">
                <CustomDropdown
                  stallValue="Select Advert Category"
                  menu={advertCategory}
                />
              </div>
            </div>

            {/* ADVERT DURATION */}
            <div className="advert_col">
              <label htmlFor=""></label>

              <div className="advert_duration">
                <label htmlFor="">Duration</label>

                <div className="advert_duration_grid">
                  <div className="grid_item">24 hours</div>
                  <div className="grid_item">48 hours</div>
                  <div className="grid_item">72 hours</div>
                  <div className="grid_item">1 week</div>
                  <div className="grid_item">2 week</div>
                  <div className="grid_item">1 month</div>
                  <div className="grid_item">3 months</div>
                  <div className="grid_item">1 year</div>
                </div>
              </div>
            </div>
          </div>

          <div className="advert_row">
            <div className="advert_col">
              <label htmlFor="">Start date</label>

              <div className="advert_date start_date">
                <CustomDropdown stallValue="Day" menu={day} />
                <CustomDropdown stallValue="Month" menu={month} />
                <CustomDropdown stallValue="Year" menu={years} />
              </div>
            </div>

            <div className="advert_col">
              <label htmlFor="">End date</label>

              <div className="advert_date end_date">
                <CustomDropdown stallValue="Day" menu={day} />
                <CustomDropdown stallValue="Month" menu={month} />
                <CustomDropdown stallValue="Year" menu={years} />
              </div>
            </div>
          </div>

          <div className="advert_row">
            <div className="advert_image">
              <label htmlFor="">Upload advert image</label>

              <button className="select_advert_image">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="new_ads"
                />

                <label htmlFor="new_ads">
                  <MdOutlineCameraAlt className="camera" />
                  Select file
                </label>
              </button>

              <span className="advert_image_name">filename.jpg</span>
            </div>
          </div>

          <div className="advert_row">
            <div className="advert_note">
              <textarea type="text" placeholder="Add a note(optional)" />
            </div>
          </div>

          <div
            className="new_ad_button clickModalOpen"
            id="btn"
            data-modal="create_advert"
            onClick={handleClick}
          >
            <ModalButton>Continue</ModalButton>
          </div>

          {modal.create_advert && (
            <ModalContainer type="create_advert">
              <PreviewNewAd />
            </ModalContainer>
          )}
          {/* </form> */}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default NewAd;
//
