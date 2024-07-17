import SuggestBusinessCard from "./SuggestBussCard";

const SuggestedBusiness = () => {
  return (
    <div className="suggest-bussinss-container">
      <div className="product-ind">Suggested Businesses</div>
      <div className="suggested-buss-row">
        <SuggestBusinessCard />
        <SuggestBusinessCard />
        <SuggestBusinessCard />
        <SuggestBusinessCard />
        <SuggestBusinessCard />
        <SuggestBusinessCard />
      </div>
    </div>
  );
};

export default SuggestedBusiness;
