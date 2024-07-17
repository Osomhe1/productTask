import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./Style.css";
import ProductDetailModal from "../Modals/productDetailModal";
import { useState } from "react";

const ProductDetailHeader = ({ handleProductClose }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const handleDetailModalClick = () => {
    setIsDetailModalOpen(!isDetailModalOpen);
  };
  return (
    <div className="buy-sell-comp-cont deati-header-bx">
      <div className="back-title">
        <AiOutlineArrowLeft className="ti-bc" onClick={handleProductClose} />
        <div className="head-line">Product details</div>
      </div>
      <div className="detail-modal-cont">
        {isDetailModalOpen && <ProductDetailModal />}
      </div>
      <div className="product-header">
        <BiDotsVerticalRounded onClick={handleDetailModalClick} />
      </div>
    </div>
  );
};

export default ProductDetailHeader;
