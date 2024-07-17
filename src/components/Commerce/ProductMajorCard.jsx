const ProductMajorCard = ({ handleProductClick }) => {
  return (
    <div className="card-product-major" onClick={handleProductClick}>
      <img
        src="https://www.microbizmag.co.uk/wp-content/uploads/2023/03/luxury-car-1024x682.jpeg"
        alt=""
      />
      <div className="pro-det-card-major">
        <div className="pro-name-txt">Semi detached duplex</div>
        <div className="price-pro-card">#200,000</div>
        <div className="pro-location-b">Lekki, Lagos</div>
      </div>
    </div>
  );
};

export default ProductMajorCard;
