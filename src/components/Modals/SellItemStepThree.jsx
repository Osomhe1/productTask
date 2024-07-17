import { AiOutlineArrowLeft } from "react-icons/ai";
// import { HiOutlinePhoto } from "react-icons/hi2";
import "./Second.css";
// import { useState } from "react";
const SellItemStepThree = ({ handleCloseMainContainerClick }) => {
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="over-scr">
        <div className="sell-ccont">
          <div className="sell-connt">
            <AiOutlineArrowLeft
              className="cls-post"
              onClick={handleCloseMainContainerClick}
            />
            <div className="fels">
              <div className="ceny">Preview item</div>
            </div>
          </div>
        </div>

        <div className="sell-form-item">
          <div className="preview-cover">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.769xw:0.770xh;0.104xw,0.106xh&resize=1200:*"
              alt=""
            />
          </div>
          <div className="card-product-details">
            <div className="cat-price-bx">
              <div className="cat-card">Automobile</div>
              <div className="pro-price-tst">$4,250.00</div>
            </div>
            <div className="cat-pro-name-txt">Toyota camry 07</div>
            <div className="sale-loc-text">Sale location : Lagos NG</div>
          </div>
          <div className="prod-img-cont-row">
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
            <div className="each-rod-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvIr-JQQivHCqAiTWnoZfukGw0N9sqFEVyq8gHRyWMIHyvR_gT51G2WuFJaAEHm5Wmh0&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div className="desc-cont">
            <div className="sell-form-head">Desciption</div>
            <div className="desc-body-box"></div>
          </div>
          <div className="next-bbbtn">
            <button className="next-step-box">Publish item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItemStepThree;
