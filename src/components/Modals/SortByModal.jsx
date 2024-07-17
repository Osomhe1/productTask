import { AiOutlineRight } from "react-icons/ai";
import ActionButton from "../Commons/Button";

const SortByModal = ({ handleFilterClose }) => {
  return (
    <div className="sort-modal-container">
      <div className="sort-by-reset flex">
        <div className="sort-by-txt">Sort by</div>
        <div className="reset-txt">Reset</div>
      </div>
      <hr className="line-ran"></hr>
      <div className="gender-sel">
        <div className="gend-txt">Gender</div>
        <div className="gen-sel-bx flex">
          <div className="gend-btn flex activ-gend">Female</div>
          <div className="gend-btn flex">Male</div>
          <div className="gend-btn flex">Others</div>
        </div>
      </div>
      <hr className="line-ran"></hr>

      <div className="age-range-container">
        <div className="sort-by-reset flex">
          <div className="gend-txt">Age range</div>
          <div className="range-score">
            18 <span>to</span> 60
          </div>
        </div>
        <div className="age-range-bx">
          <div className="slider-cicrle-minmum"></div>
          <div className="main-slider"></div>
          <div className="slider-cicrle-maximum"></div>
        </div>
      </div>
      <hr className="line-ran"></hr>

      <div className="loca-row-cont">
        <div className="sort-by-reset flex">
          <div className="gend-txt">Location</div>
          <div className="show-all-bx flex">
            <div className="so-all-txt">Show all</div>
            <AiOutlineRight />
          </div>
        </div>
      </div>
      <hr className="line-ran"></hr>

      <div className="verify-acc-container">
        <div className="sort-by-reset flex">
          <div className="gend-txt">Verified Account</div>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="apply-btn-cont flex" onClick={handleFilterClose}>
        <ActionButton label={"Apply"} />
      </div>
    </div>
  );
};

export default SortByModal;
