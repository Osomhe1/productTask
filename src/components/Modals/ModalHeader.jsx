import { FaArrowLeft } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const ModalHeader = ({ header, onModalClose }) => {
  return (
    <div className="px-[15px] py-[10px] flex justify-between items-center !border-solid !border-b-2 border-t-0 border-l-0 border-r-0 !border-[#e8e8e8ad]">
      <button onClick={() => onModalClose()}>
        <FaArrowLeft className="text-[#222222] text-[20px]" />
      </button>

      <h2 className="title text-[#000] text-[17px] font-normal">{header}</h2>

      <img
        src={logo}
        alt="2geda"
        className="w-[45px] h-[45px] object-contain"
      />
    </div>
  );
};

export default ModalHeader;
