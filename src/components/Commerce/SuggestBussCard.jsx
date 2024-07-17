import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdStarBorderPurple500 } from "react-icons/md";

const SuggestBusinessCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const hanleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="sugg-buss-card-cont">
      <div className="buss-details-cont">
        <img src="images/pic3.png" alt="" />
        <div className="buss-det-connt">
          <div className="buss-namee">Business Page 1</div>
          <div className="buss-loc">Lagos | Nigeria</div>
          <div className="buss-loc">Estd. 2011</div>
          <div className="rate-buss-row">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <MdStarBorderPurple500 />
          </div>
          <div className="avr-rate">Average rating : 4.5</div>
        </div>
      </div>
      <div className="stick-btn">
        <button
          className={isClicked ? "stickin " : " stick-btnn"}
          onClick={hanleClick}
        >
          {isClicked ? "Unstick" : "Stick"}
        </button>
      </div>
    </div>
  );
};

export default SuggestBusinessCard;
