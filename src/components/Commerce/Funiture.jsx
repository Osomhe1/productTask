import ProductMajorCard from "./ProductMajorCard";

const FurnitureProduct = ({ handleProductClick }) => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Furnitures & Decoration</div>
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

export default FurnitureProduct;
