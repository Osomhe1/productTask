import {
  AiOutlineClose,
  AiOutlineCamera,
} from "react-icons/ai";
import ActionButton from "../Commons/Button";
import VerificationSucess from "./VerificationSucess";
import { useState } from "react";

const VerificationAcc = ({ handleRequestClose }) => {
  const [isRequestSucessOpen, setIsRequestSucessOpen] = useState(false);

  const handleRequestSucessClick = () => {
    setIsRequestSucessOpen(true);
  };

  const handleRequestSucessClose = () => {
    handleRequestClose();
    setIsRequestSucessOpen(false);
  };

  return (
    <>
      {isRequestSucessOpen && (
        <div className="modal-full-container">
          <VerificationSucess
            handleRequestSucessClose={handleRequestSucessClose}
          />
        </div>
      )}
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineClose
                className="cls-post"
                onClick={handleRequestClose}
              />
              <div className="fels">
                <div className="claim">Verification</div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="change-pw">
          <div className="claim-gen-bd">
            <div className="letter-dear provid">Account Verification</div>
            <div className="letter-bdy">
              To verify your account, certain procedures are required and that
              will determine if we’ll verify your account or not
            </div>
          </div>
          <div className="input-containe-claim">
            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Legal name"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Work or Profession"
                />
              </div>
            </div>

            <div className="letter-bdy">
              Please paste Three(3) Links where your name has been mentioned and
              your picture(s) Show clearly.
            </div>
            <div className="letter-bdy">
              These context must be of a good reputation and contribution to the
              Community.
            </div>

            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp btm-bd"
                  placeholder="Link 1"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp btm-bd"
                  placeholder="Link 2"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp btm-bd"
                  placeholder="Link 3"
                />
              </div>
            </div>
            <div className="letter-bdy">
              Upload a clear front picture of any Government <br /> issued ID :
              Show details clearly.
            </div>

            <div className="selec-id-card">
              <button className="seled-id-bn flex">
                <AiOutlineCamera className="photo-ma" />
                <div className="file-id-sel">Select file</div>
              </button>
              <div className="uploaded-nanme">doosoo.jpg</div>
            </div>
            <div className="conntc" onClick={handleRequestSucessClick}>
              <ActionButton label={"Send request"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationAcc;
