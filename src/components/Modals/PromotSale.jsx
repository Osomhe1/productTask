import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Second.css";
const PromotSale = ({ handleCloseMainContainerClick }) => {
  return (
    <div className="postFormModal-container status-modal-container">
      {" "}
      <div className="over-scr">
        <div className="sell-ccont">
          <div className="sell-connt">
            <AiOutlineArrowLeft
              className="cls-post"
              onClick={handleCloseMainContainerClick}
            />
            <div className="fels">
              <div className="ceny">Upload images</div>
            </div>
          </div>
        </div>
        <div className="sell-form-item">
          <div className="sell-form-head">
            Sell faster when you promote your item
          </div>
          <div className="price-txt">We’ve got amazing plans for you</div>
        </div>
      </div>
    </div>
  );
};

export default PromotSale;
