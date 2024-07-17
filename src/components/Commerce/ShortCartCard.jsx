import { MdDelete } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
const SortCartCard = () => {
  return (
    <div className="cart-short-bosx">
      <div className="short-crt-cont">
        <img src="images/pic3.png" alt="" />
        <div className="cart-pro-st">
          <div className="cat-pro-nm">Semi detached duplex</div>
          <div className="cat-pr-pr">#200,000</div>
          <div className="loc-ct">Lekki, Lagos</div>
        </div>
      </div>
      <form action="" className="btn-e-cat">
        <button className="del-cat-btn">
          <MdDelete />
        </button>
        <button className="del-cat-btn mesc">
          <HiOutlineMailOpen />
        </button>
      </form>
    </div>
  );
};

export default SortCartCard;
