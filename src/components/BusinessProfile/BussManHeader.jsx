import { AiOutlineArrowLeft } from "react-icons/ai";

const BussManHeader = ({ handleProductClose }) => {
  return (
    <div className="buy-sell-comp-cont deati-header-bx  ">
      <div className="back-title">
        <AiOutlineArrowLeft className="ti-bc" onClick={handleProductClose} />
        <div className="head-line">Manage businesses</div>
      </div>
    </div>
  );
};

export default BussManHeader;
