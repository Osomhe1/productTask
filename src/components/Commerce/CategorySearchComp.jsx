import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const CategorySearchComp = ({ label }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/commerce");
  };
  return (
    <div className="buy-sell-comp-cont">
      <div className="back-title">
        <AiOutlineArrowLeft className="ti-bc" onClick={goBack} />
        <div className="head-line">{label}</div>
      </div>
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

export default CategorySearchComp;
