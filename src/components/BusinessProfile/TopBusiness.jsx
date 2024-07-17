import ShortTopBussCard from "./ShortTopBussCard";

const TopBusiness = () => {
  return (
    <div className="short-cart-container">
      <div className="short-cart-eader">
        <div className="head-cart-s">Top Businesses</div>
        <div className="total-short-cart">5</div>
      </div>
      <div className="cont-cart-sot buss-tp">
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
        <ShortTopBussCard />
      </div>
    </div>
  );
};

export default TopBusiness;
