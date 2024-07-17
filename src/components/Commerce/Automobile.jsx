import ProductMajorCard from "./ProductMajorCard";

const AutomobileProduct = ({ handleProductClick }) => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Automobile</div>
      <div className="product-card-row">
        <ProductMajorCard handleProductClick={handleProductClick} />
        <ProductMajorCard handleProductClick={handleProductClick} />
        <ProductMajorCard handleProductClick={handleProductClick} />
        <ProductMajorCard handleProductClick={handleProductClick} />
        <ProductMajorCard handleProductClick={handleProductClick} />
        <ProductMajorCard handleProductClick={handleProductClick} />
        <ProductMajorCard handleProductClick={handleProductClick} />
        <ProductMajorCard handleProductClick={handleProductClick} />
        <ProductMajorCard handleProductClick={handleProductClick} />
      </div>
    </div>
  );
};

export default AutomobileProduct;
