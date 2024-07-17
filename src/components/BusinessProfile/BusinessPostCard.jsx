import { BsStarFill } from "react-icons/bs";
import "./style.css";

const BusinessPostCard = () => {
  return (
    <div className="business-card-container">
      <div className="poster-time-box flex">
        <div className="poster-nm">Mcdonalds</div>
        <div className="posted-time">2hrs ago</div>
      </div>
      <img
        src="https://t3.ftcdn.net/jpg/00/69/85/64/360_F_69856461_O8p56mlDwWo0mXFswcYbGbP7Ihlbimiw.jpg"
        alt=""
      />
      <div className="post-title">Burger small</div>
      <div className="poster-time-box flex">
        <div className="rate-star-bx flex">
          <BsStarFill />
          <div className="poster-nm">4.5</div>
        </div>
        <div className="price-posted">#20,000</div>
      </div>
    </div>
  );
};

export default BusinessPostCard;
