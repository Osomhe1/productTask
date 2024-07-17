import { AiOutlinePlus } from "react-icons/ai";
import ModalHeader from "./ModalHeader";
import IMELPhone from "./IMELPhone";
import ModalWrapper from "./ModalWrapper";
import { useModal } from "../../Hooks/useModal";
import NewIMEISerialModal from "./NewIMEISerialModal";
import ModalContainer from "./ModalContainer";
import { useOpenModal } from "Hooks/useOpenModal";
import { useGetGadgets } from "Hooks/profile/useGetGadjets";

const PhoneImei = ({ onModalClose, title, type, gadgets }) => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();
  const { gadgetStatus} = useGetGadgets();

  return (
    <ModalWrapper>
      <ModalHeader header={title} onModalClose={onModalClose} />

      <div className="px-[15px] h-[90vh] overflow-y-auto mb-0 py-[10px] lg:px-[10px] lg:h-[60vh] overflow-auto lg:mb-[1.5rem]">
        <div className="flex flex-col gap-[15px] py-[20px]">
          {gadgetStatus === "pending" ? (
            <h2>Loading...</h2>
          ) : (
            gadgets?.map((gadget) => (
              <IMELPhone
                key={gadget?.id}
                name={gadget?.phone_name}
                id_number={gadget?.id_number}
                id={gadget?.id}
                type={type}
                category={gadget?.category}
              />
            ))
          )}
        </div>
      </div>

      {/* ADDITIONAL BUTTON */}
      <div
        className="absolute shadow-lg bottom-[30px] right-[30px] z-[99] w-[50px] h-[50px] p-[13px] flex flex-col items-center justify-center rounde-[50px] bg-[#4f0da3] self-end cursor-pointer text-[#fff] clickModalOpen"
        id="btn"
        data-modal="input"
        onClick={handleClick}
      >
        <AiOutlinePlus className="text-[20px]" />
      </div>

    </ModalWrapper>
  );
};

export default PhoneImei;
