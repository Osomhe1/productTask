import SortCartCard from "./ShortCartCard";

const Shortcart = () => {
  return (
    <div className="short-cart-container">
      <div className="short-cart-eader">
        <div className="head-cart-s">Cart</div>
        <div className="total-short-cart">5</div>
      </div>
      <div className="cont-cart-sot">
        <SortCartCard />
        <SortCartCard />
        <SortCartCard />
        <SortCartCard />
        <SortCartCard />
        <SortCartCard />
        <SortCartCard />
        <SortCartCard />
      </div>
    </div>
  );
};

export default Shortcart;
