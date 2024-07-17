import SellHeader from "../shared/sellHeader";
// import PropTypes from "prop-types";
import { ModalContext } from "Context/ModalContext";
import { useContext, useEffect, useState } from "react";
import { Sharedata } from "./modalContents/Sharecontent";
import ReviewContent from "./modalContents/ReviewContents";
import { ReportItem, Reportseller } from "./modalContents/Reports";
import Checkout from "./Checkout";
import OrderFulfilment from "./modalContents/managestore/Orderfulfil";
import MarkSold from "./modalContents/managestore/marksold";
import Sellanitem from "./Sellanitem/sellitem";
import Createbusiness from "./createbusiness/createbusiness";
const Review = () => {
  const { currentCheck, movetoReview } = useContext(ModalContext);

  const reverseAction = () => {
    currentCheck !== "readReview" && movetoReview();
  };
  return (
    <>
      <div>
        <SellHeader
          clickBack={reverseAction}
          title={
            currentCheck === "readReview"
              ? "Reviews"
              : currentCheck === "addReview"
              ? "Rate this Product"
              : "Nothing"
          }
          // hiding-back-arrows
          hideArr={currentCheck === "readReview" ? true : false}
          // hiding-close-icon
          hide={false}
        />
        <div>
          <ReviewContent />
        </div>
      </div>
    </>
  );
};

export const CommerceModal = () => {
  const { isOpen, contentType } = useContext(ModalContext);
  console.log(`c is ${contentType}`);
  const [classmobile, setClassmobile] = useState("");
  // get-screen-size-andupdate-state
  // targeting the current screen and current modal and setting dynamic classes for it
  useEffect(() => {
    if (window.innerWidth <= 725) {
      console.log("targeted");
      switch (contentType) {
        case "sharemodal":
          setClassmobile("share_mobile");
          break;
        case "marksold":
          setClassmobile("share_mobile");
          break;
        default:
          setClassmobile("mobile_view_modal");
      }
    }
  }, [contentType]);
  return (
    <div
      className={` ${isOpen ? "block" : "hidden"}  bg-[#ffff] ${
        (contentType === "sharemodal" || contentType === "marksold") &&
        "p-10 rounded-xl"
      } z-[994] mx-auto fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-auto max-h-[95vh] overlay_modal ${classmobile} animate_pop_fade`}
    >
      {contentType === "sharemodal" ? (
        <Sharedata />
      ) : contentType === "reviewitem" ? (
        <Review />
      ) : contentType === "reportitem" ? (
        <ReportItem />
      ) : contentType === "reportseller" ? (
        <Reportseller />
      ) : contentType === "checkout" ? (
        <Checkout />
      ) : contentType === "orderfulfilment" ? (
        <OrderFulfilment />
      ) : contentType === "marksold" ? (
        <MarkSold />
      ) : contentType === "sellitem" ? (
        <Sellanitem />
      ) : contentType === "createbusiness" ? (
        <Createbusiness />
      ) : null}
    </div>
  );
};
// Review.propTypes = {
//   content: PropTypes.node.isRequired,
// };
export default Review;
