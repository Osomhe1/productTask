import { useModal } from "Hooks/useModal";
import payoutImage from "../../assets/profile_images/payout.png";
import ModalButton from "./ModalButton";

const PayoutModal = () => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal((prev) => ({
      ...prev,
      payment: false,
    }));
  };

  return (
    <div className="payout_modal">
      <div className="confirmation">
        <img src={payoutImage} alt="Payouts" />

        <p>Your withdrawal request has been recieved and is being processed</p>

        <div className="cta" style={{ width: "60%" }}>
          <ModalButton onClick={handleClick}>Done</ModalButton>
        </div>
      </div>
    </div>
  );
};

export default PayoutModal;
