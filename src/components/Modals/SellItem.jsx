import { AiOutlineArrowLeft, AiOutlineRight } from "react-icons/ai";
import "./Second.css";
import PromotSale from "./PromotSale";
const SellItem = ({
  handleCloseMainContainerClick,
  handleSellContainerClick,
  handleCloseSellPromoteClick,
  handleSellPromoteClick,
  isPromoteModalOpen,
}) => {
  return (
    <>
      {isPromoteModalOpen && (
        <div className="modal-full-container">
          <PromotSale
            handleCloseMainContainerClick={handleCloseSellPromoteClick}
          />
        </div>
      )}
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          <div className="sell-ccont">
            <div className="sell-connt">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handleCloseMainContainerClick}
              />
              <div className="fels">
                <div className="ceny">Sell an item</div>
              </div>
            </div>
          </div>
          <div className="sell-form-item">
            <div className="sell-form-head">
              Sell any item in 3 simple steps
            </div>
            <div className="all-input-container">
              <div className="input-sell-item-inp">
                <select name="" id="" className="inp-sel">
                  <option value="">Set product category</option>
                  <option value="Automobile">Automobile</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Skin_Care">Skin Care</option>
                </select>
                <input
                  type="text"
                  placeholder="Product title"
                  className="inp-sel"
                />
                <textarea
                  type="text"
                  placeholder="Description"
                  className="inp-sel area-txt"
                />
                <input
                  type="text"
                  placeholder="Set sale location"
                  className="inp-sel"
                />
                <div className=" inp-sel inp-price">
                  {/* <div className="price-txt">Item price</div> */}
                  <select name="" id="" className="pri-sel">
                    <option value="$">$</option>
                    <option value="#">#</option>
                  </select>
                  <input
                    type="text"
                    className="pri-inp-c"
                    placeholder="Item price"
                  />
                </div>

                <div className="guildness-btn">
                  <div className="txt-uiness">Read our pricing guidelines</div>
                  <AiOutlineRight />
                </div>
                <div className="guildness-btn" onClick={handleSellPromoteClick}>
                  <div className="txt-uiness">How to sell faster</div>
                  <AiOutlineRight />
                </div>
                <div className="next-bbbtn">
                  <div
                    className="next-step-box"
                    onClick={handleSellContainerClick}
                  >
                    Move to step 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellItem;
