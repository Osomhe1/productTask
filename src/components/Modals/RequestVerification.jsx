import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
// import camera from '../../assets/profile_images/Camera.png';
import ModalButton from "../Modals/ModalButton";
import { MdOutlineCameraAlt } from "react-icons/md";
import ConfirmationButton from "./ConfirmationButton";
import { useModal } from "Hooks/useModal";
import { useOpenModal } from "Hooks/useOpenModal";
import { verifyUser } from "api/services/profile";
import { useState } from "react";
import { useVerifyUser } from "Hooks/profile/useVerifyUser";
import { link } from "@nextui-org/theme";

const RequestVerification = ({ onModalClose }) => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();
  const [isLoading, setIsLoading] = useState(false)
  const [legalName, setLegalName] = useState("");
  const [work, setWork] = useState("");
  const [verifyImage, setVerifyImage] = useState("");
  const [linkOne, setLinkOne] = useState("");
  const [linkTwo, setLinkTwo] = useState("");
  const [linkThree, setLinkThree] = useState("");

  const { verifyStatus, verifying, isVerifying } = useVerifyUser();

  const handleManageVerification = async (e) => {
    e.preventDefault();

    
    const formData = {
      legal_name: legalName,
      work: work,
      link1: linkOne,
      link2: linkTwo,
      link3: linkThree,
      id_image: verifyImage,
    };
    
    setIsLoading(true)
    try {
      const res = await verifyUser(formData);
      console.log("verify res", res);
      setIsLoading(false) 
    } catch (err) {
      console.log(err);
      setIsLoading(false)
    }
    
    verifying(formData);
  };

  return (
    <>
      <ModalWrapper>
        <ModalHeader header="Verification" onModalClose={onModalClose} />

        <form
          className="request_verification"
          onSubmit={handleManageVerification}
        >
          <div className="request_verification_top">
            <h2>Account Verification</h2>
            <p>
              To verify your account, certain procedures are required and that
              will determine if we’ll verify your account or not
            </p>
          </div>

          <div className="request_verification_middle">
            <input
              type="text"
              placeholder="Legal name"
              onChange={(e) => setLegalName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Work or Profession"
              required
              onChange={(e) => setWork(e.target.value)}
            />
          </div>

          <div className="request_verification_bottom">
            <p>
              Please paste Three(3) Links where your name has been mentioned and
              your picture(s) Show clearly. These context must be of a good
              reputation and contribution to the Community.
            </p>

            <div className="link">
              <input
                type="text"
                placeholder="Link 1"
                required
                onChange={(e) => setLinkOne(e.target.value)}
              />
            </div>

            <div className="link">
              <input
                type="text"
                placeholder="Link 2"
                onChange={(e) => setLinkTwo(e.target.value)}
                required
              />
            </div>

            <div className="link">
              <input
                type="text"
                placeholder="Link 3"
                onChange={(e) => setLinkThree(e.target.value)}
                required
              />
            </div>

            <div className="select_file">
              <p>
                Upload a clear front picture of any Government issued ID : Show
                details clearly.
              </p>

              <input type="file" id="file" style={{ display: "none" }} />

              <label htmlFor="file">
                <MdOutlineCameraAlt className="camera" />
                Select file
              </label>
            </div>

            <div className="request_verification_bottom_button">
              <ModalButton
                data-modal="verification_sent"
                className="clickModalOpen"
              >
                Send request
              </ModalButton>
            </div>
          </div>
        </form>
      </ModalWrapper>

      {modal.verification_sent && <ConfirmationButton />}
    </>
  );
};

export default RequestVerification;
