//import check from "../../assets/profile_images/check-mark-button.png";

import thumb from "../../assets/profile_images/logo-thumb.png";

import useProfileModal from "Hooks/profile/useProfileModal";
import useGetEventDetails from "Hooks/useGetEventDetails";
import { useState } from "react";
import { PiCopySimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const VerifyConfirmationButton = ({ title, sub, btnText, ticket, payout }) => {
  const { isEditing, newTicketID, handleRemoveNewTicketID } =
    useGetEventDetails();

  const url = `https://2geda.net/ticket/event/${newTicketID}`;
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  const { closeSuccessModal } = useProfileModal();

  const handleEditClose = () => {
    closeSuccessModal();
    handleRemoveNewTicketID();
    ticket ? navigate("/ticket") : payout ? navigate('/ticket/sell-ticket') : navigate("/profile");
  };


  const handleCreateClose = () => {
    closeSuccessModal();
    handleRemoveNewTicketID();
    ticket ? navigate("/ticket") : payout ? navigate('/ticket/sell-ticket') : navigate("/profile");
  };


  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        /* onClick={handleClick} */
      ></div>

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-[320px] text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-center mb-4">
            <img src={thumb} alt="logo" className="w-[80px]" />
          </div>
          <h2 className="text-[19px] font-semibold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-[14px] text-center mb-4">{sub}</p>

          {ticket && (
            <div>
              <div className="copy-url-cont">
                <div className="text-[12px]">{url}</div>
                <PiCopySimple className="cp-icon" onClick={handleCopyClick} />
              </div>

              {isCopied && (
                <div className="text-[12px] text-[#4f0da3]">Copied</div>
              )}
            </div>
          )}

          <button
            className="bg-[#4f0da3] text-[#fff] p-3 w-full mt-4  rounded text-[14px]"
            onClick={isEditing ? handleEditClose : handleCreateClose}
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyConfirmationButton;
