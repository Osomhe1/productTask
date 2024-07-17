import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";

const ClaimBusinessModalDone = ({ handleClaimClickCloseDone }) => {
  return (
    <div className="postFormModal-container status-modal-container  h-[400px] lg:h-[600px]  overflow-y-scroll">
      <div className="over-scr">
        {" "}
        <div className="flex justify-between w-full items-center">
          <AiOutlineArrowLeft size={20} onClick={handleClaimClickCloseDone} />
          <div className="claim text-[14px] lg:text-[18px] font-bold">
            Claim Business
          </div>
          <img src="images/lo2.png" alt="logo" className="w-[30px]" />
        </div>
        <div className="sucess-image">
          <img src="images/em2.png" alt="" />
          <div className="succ-msg">
            Thank you for submitting your business claim. We are reviewing your
            details for accuracy and security. Watch your email for confirmation
            and further instructions.
          </div>
        </div>
        <div
          className="act-bttn-claim dw-s"
          onClick={handleClaimClickCloseDone}
        >
          <ActionButton
            label={"Continue to Business Directory"}
            bg={"pruplr"}
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimBusinessModalDone;
