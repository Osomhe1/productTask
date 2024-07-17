import { AiTwotoneStar } from "react-icons/ai";
const ReviewItem = () => {
  return (
    <div className="review-item-container">
      <div className="rate-name-coll">
        <div className="name-reviwer">Sam Loco</div>
        <div className="rate-perc">
          <AiTwotoneStar className="sstr" />
          <div className="rate-tto">4.5</div>
        </div>
      </div>
      <div className="review-text">“Good customer services always”</div>
    </div>
  );
};

export default ReviewItem;
