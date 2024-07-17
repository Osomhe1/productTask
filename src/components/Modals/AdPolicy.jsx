import { useModal } from "../../Hooks/useModal";
import ActionButton from "../Commons/Button";
import NewAd from "./NewAd";
import AdPolicyList from "./AdPolicyList";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
import ModalContainer from "./ModalContainer";
import ModalButton from "./ModalButton";
import { useOpenModal } from "Hooks/useOpenModal";

const AdPolicy = ({ onModalClose }) => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();

  return (
    <ModalWrapper>
      <ModalHeader header="Advert Policy" onModalClose={onModalClose} />

      <div className="ad_policy_container">
        <h5>
          Our Adverts Policy are the rules guiding posting of Ads on 2geda as a
          Platform to reach out to Potential Clients and Investors.
        </h5>

        <AdPolicyList
          header="(1) Our Audience"
          body="Our Community of users are Elites and they have right to tailor
              the content they prefer to see per time and how it is being shown."
        />

        <AdPolicyList
          header="(2) Content"
          body="Being a curated platform : we are concerned abo content ofut the
              the Adverts that’ll be shown to users. This assure the users that
              we have them in mind always."
        />

        <AdPolicyList
          header="(3) Ad sizes"
          body="Our Community of users are Elites an dy have right to
              tailor the content they prefer to see per time and how it is being
              shown."
        />

        <AdPolicyList
          header="(4) Prices"
          body="Our Community of users are Elites and they have right to
              tailor the content they prefer to see per time and how it is being
              shown."
        />

        <div
          className="center_wrapper clickModalOpen"
          id="btn"
          data-modal="advert"
          onClick={handleClick}
        >
          <ModalButton>Continue</ModalButton>
        </div>

        {modal.advert && (
          <ModalContainer type="advert">
            <NewAd />
          </ModalContainer>
        )}
      </div>
    </ModalWrapper>
  );
};

export default AdPolicy;
