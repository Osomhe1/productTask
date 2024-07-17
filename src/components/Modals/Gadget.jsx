import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ModalHeader from "./ModalHeader";
import PhoneImei from "./PhoneImei";
import ModalWrapper from "./ModalWrapper";
import { useModal } from "../../Hooks/useModal";
import ModalContainer from "./ModalContainer";
import { useOpenModal } from "Hooks/useOpenModal";
import { useGetGadgets } from "Hooks/profile/useGetGadjets";

const Gadget = ({ onModalClose }) => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();

  const { gadgets, gadgetStatus } = useGetGadgets();

  const serialGadgets = gadgets?.data.filter(
    (item) => item.category === "serial_number"
  );
  const imeiGadgets = gadgets?.data.filter((item) => item.category === "imei");

  return (
    <ModalWrapper>
      <ModalHeader
        header="Phone IMEI/ Gadget serial no"
        onModalClose={onModalClose}
      />

      <div className="px-[15px] h-[90vh] overflow-y-auto mb-0 py-[10px] lg:px-[10px] lg:h-[60vh] overflow-auto lg:mb-[1.5rem]">
        <div className="flex flex-col gap-[20px] py-[1.5rem] px-0">
          {/* PHONE IMEI */}
          <div
            className="flex p-[10px] justify-between items-center rounded-[5px] border border-[#d0d5dd] cursor-pointer clickModalOpen"
            id="btn"
            onClick={handleClick}
            data-modal="phoneIMEI"
          >
            <div>
              <h4 className="text-[#000] text-[14px] font-light">Phone IMEI</h4>
              <span className="text-[#ff8a15] text-[12px] font-light">
                {imeiGadgets?.length}
              </span>
            </div>

            <div className="text-[20px]  text-gray-500">
              <IoIosArrowForward />
            </div>
          </div>
          {modal.phoneIMEI && (
            <ModalContainer type="phoneIMEI">
              <PhoneImei title="Phone IMEI" type="Imei" gadgets={imeiGadgets} />
            </ModalContainer>
          )}

          {/* SERIAL NUMBER */}
          <div
            className="flex p-[10px] justify-between items-center rounded-[5px] border border-[#d0d5dd] cursor-pointer  clickModalOpen"
            id="btn"
            onClick={handleClick}
            data-modal="serialNO"
          >
            <div>
              <h4 className="text-[#000] text-[14px] font-light">
                Serial number
              </h4>
              <span className="text-[#ff8a15] text-[12px] font-light">
                {serialGadgets?.length}
              </span>
            </div>

            <div className="text-[20px] text-gray-500">
              <IoIosArrowForward />
            </div>
          </div>
          {modal.serialNO && (
            <ModalContainer type="serialNO">
              <PhoneImei
                title="Gadget Serial no"
                type="Serial"
                gadgets={serialGadgets}
              />
            </ModalContainer>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Gadget;
