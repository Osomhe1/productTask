import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";

const ClaimBusinessModalOne = ({
  handleClaimClickCloseOne,
  handleClaimClickTwo,
}) => {
  return (
    <div className="postFormModal-container status-modal-container  h-[400px] lg:h-[600px]  overflow-y-scroll">
      <div className="over-scr">
        {" "}
        <div className="flex justify-between w-full items-center">
          <AiOutlineArrowLeft size={20} onClick={handleClaimClickCloseOne} />
          <div className="claim text-[14px] lg:text-[18px] font-bold">
            Claim Business
          </div>
          <img src="images/lo2.png" alt="logo" className="w-[30px]" />
        </div>
        <div className="claim-gen-bdy">
          <div className="letter-dear provid text-[12px] lg:text-[14px] text-center">Provide business information</div>
          <div className="letter-bdy text-[12px] lg:text-[14px] text-center">
            Enter business details for ownership claim
          </div>
          <div className="input-containe-claim mt-4">
            <div className="double-input">
              <div className="inp-label-box">
                <label htmlFor="">Business name</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter business name"
                />
              </div>
              <div className="inp-label-box mt-4">
                <label htmlFor="">Business address</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter business address"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box mt-4">
                <label htmlFor="">Business description</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="start typing"
                />
              </div>
              <div className="inp-label-box mt-4">
                <label htmlFor="">Phone number</label>
                <input
                  type="tel"
                  className="claim-inp"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box mt-4">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="claim-inp"
                  placeholder="Enter email address"
                />
              </div>
              <div className="inp-label-box mt-4">
                <label htmlFor="">Website(optional)</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter website link"
                />
              </div>
            </div>
          </div>
          <div className="act-bttn-claim" onClick={handleClaimClickTwo}>
            <ActionButton label={"Continue"} bg={"pruplr"} />
          </div>

          <div className="step-rect-cont">
            <div className="step-rec"></div>
            <div className="step-rec ash"></div>
            <div className="step-rec ash"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimBusinessModalOne;
