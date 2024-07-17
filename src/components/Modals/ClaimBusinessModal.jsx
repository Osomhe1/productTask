import { AiOutlineArrowLeft, AiOutlineCheck } from "react-icons/ai";
import ActionButton from "../Commons/Button";

const ClaimBusinessModal = ({ handleClaimClickClose, handleClaimClickOne }) => {
  return (
    <div className="postFormModal-container status-modal-container h-[400px] lg:h-[600px] overflow-y-scroll">
      <div className="over-scr">
        {" "}
        <div className="flex justify-between w-full items-center">
          <AiOutlineArrowLeft size={20} onClick={handleClaimClickClose} />
          <div className="claim text-[14px] lg:text-[18px] font-bold">Claim Business</div>
          <img src="images/lo2.png" alt="logo" className="w-[30px]" />
        </div>
        <div className="claim-gen-bdy">
          <div className="letter-dear text-[12px] lg:text-[14px] font-[500]">
            Dear Business Owner,
          </div>
          <div className="letter-bdy  text-[12px] lg:text-[14px] mt-4">
            Thank you for your interest in claiming your business on 2geda. To
            ensure the accuracy and security of our directory, we require that
            you verify your ownership of the business before proceeding.
          </div>
          <div className="why-owner-imp-box ">
            <div className="why-owner-head">
              Why Ownership Verification is Important
            </div>
            <div className="letter-bdy  text-[12px] lg:text-[14px]">
              Verifying ownership helps us maintain the integrity of our
              directory and ensures that only authorized individuals have
              control over their business listings. This process helps prevent
              unauthorized claims and keeps the information up-to-date and
              accurate for our users.
            </div>
          </div>
          <div className="letter-dear  text-[12px] lg:text-[14px]">
            To claim your business, follow the steps below
          </div>
          <div className="steps-container-box">
            <div className="step-container">
              <div className="check-cir">
                <AiOutlineCheck />
              </div>
              <div className="step-text-box">
                <div className="step-count">STEP 1</div>
                <div className="letter-dear text-[12px] lg:text-[14px]">
                  Provide business information
                </div>
              </div>
            </div>
            <div className="bord-let"></div>
            <div className="step-container">
              <div className="check-cir">
                <AiOutlineCheck />
              </div>
              <div className="step-text-box">
                <div className="step-count">STEP 2</div>
                <div className="letter-dear text-[12px] lg:text-[14px]">
                  Upload Ownership Documents
                </div>
              </div>
            </div>
            <div className="bord-let"></div>

            <div className="step-container">
              <div className="check-cir">
                <AiOutlineCheck />
              </div>
              <div className="step-text-box">
                <div className="step-count">STEP 3</div>
                <div className="letter-dear text-[12px] lg:text-[14px]">
                  Verify your identity
                </div>
              </div>
            </div>
          </div>
          <div className="letter-bdy text-[12px] lg:text-[14px]">
            <span className="letter-dear text-[#4F0DA3] font-[500]">
              Important Note:{" "}
            </span>
            Falsely claiming a business that you do not own is a violation of
            our terms of service and may result in the removal of your listing.
            Please only proceed with claiming your business if you are the
            rightful owner or authorized representative.
          </div>
          <div className="act-bttn-claim" onClick={handleClaimClickOne}>
            <ActionButton label={"Proceed to claim"} bg={"pruplr"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimBusinessModal;
