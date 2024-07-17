import ProductMajorCard from "./ProductMajorCard";

const TrendingProduct = ({ handleProductClick }) => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Trending and Hot</div>
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

export default TrendingProduct;
