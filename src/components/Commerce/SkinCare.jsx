import ProductMajorCard from "./ProductMajorCard";

const SkinCareProduct = ({ handleProductClick }) => {
  return (
    <div className="trending-product-container">
      <div className="product-ind"> Skin Care</div>
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

export default SkinCareProduct;
