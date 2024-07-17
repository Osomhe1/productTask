import SellHeader from "components/newCommerce/shared/sellHeader";
import Checkoutcontent from "./modalContents/Checkoutcontent";
import { ModalContext } from "Context/ModalContext";
import { useContext } from "react";
const Checkout = () => {
  const { cartContent, nextCartPopup } = useContext(ModalContext);

  const handlePrevious = () => {
    if (cartContent === "addressSelection") {
      nextCartPopup("checkoutconfirm");
    } else if (cartContent === "buyerDetails") {
      window.confirm("Go back Without saving changings?") &&
        nextCartPopup("addressSelection");
    } else nextCartPopup("checkoutconfirm");
  };

  return (
    <div>
      <SellHeader
        clickBack={handlePrevious}
        title={
          cartContent === "buyerDetails"
            ? "Checkout"
            : cartContent === "addressSelection"
            ? "Select Address"
            : cartContent === "checkoutconfirm"
            ? "checkout"
            : null
        }
        hideArr={cartContent === "checkoutconfirm" ? true : false}
        hide={false}
        brad="2px solid transparent"
      />
      <div>
        <Checkoutcontent />
      </div>
    </div>
  );
};

export default Checkout;
