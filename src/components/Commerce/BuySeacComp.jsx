// import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import "./Style.css";

const BuySearchComp = () => {
  return (
    <div className="buy-sell-comp-cont">
      <div className="head-line">Buy and sell instantly</div>
      <div className="search-product sto-sea">
        <div className="sear-input-pro">
          <input
            type="text"
            className="inp-pro"
            placeholder="Search products"
          />
        </div>
        <BiSearch className="seah-con" />
      </div>
    </div>
  );
};

export default BuySearchComp;
