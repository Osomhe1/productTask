const CategoryMajorCard = ({ handleProductClick }) => {
  return (
    <div
      className="card-product-major cat-card-bx-mg"
      onClick={handleProductClick}
    >
      <img src="images/pic2.png" alt="" />
      <div className="pro-det-card-major">
        <div className="pro-name-txt">Semi detached duplex</div>
        <div className="price-pro-card">#200,000</div>
        <div className="pro-location-b">Lekki, Lagos</div>
      </div>
    </div>
  );
};

export default CategoryMajorCard;
